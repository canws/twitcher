<?php

namespace App\Http\Controllers;

use App\Models\TokenPack;
use App\Models\TokenSale;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\StripeClient as StripeClient;

class StripeController extends Controller
{
    // auth
    public function __construct()
    {
        $this->middleware('auth');
    }

    // purchase
    public function purchase(TokenPack $tokPack, Request $request)
    {  
        $stripeImg = asset('images/stripe-cards.png');
        $publicKey = opt('STRIPE_PUBLIC_KEY');

        $sale = TokenSale::create([
                    'user_id' => $request->user()->id,
                    'tokens' => $tokPack->tokens,
                    'amount' => $tokPack->price,
                    'status' => 'pending',
                    'gateway' => 'Credit Card (Stripe)'
                ]);

        $saleId = $sale->id;

        $cs = $this->paymentIntent($tokPack, $sale->id);

        return Inertia::render('Tokens/StripeForm', compact('tokPack', 'stripeImg', 'publicKey', 'cs', 'saleId'));
    }

    // get client secret
    public function paymentIntent(TokenPack $tokenPack, $saleId)
    {
        $stripe = new StripeClient(opt('STRIPE_SECRET_KEY'));

        $stripeAmount = $tokenPack->price*100;

        $pi = $stripe->paymentIntents->create(
            [
                'amount' => $stripeAmount,
                'currency' => opt('payment-settings.currency_code'),
                'payment_method_types' => ['card'],
                'metadata' => ['sale_id' => $saleId]
            ]
        );

        return $pi->client_secret;
    }

    public function processOrder(Request $request)
    {
        $request->validate([
            'payment_intent'=> 'required',
            'payment_intent_client_secret' => 'required'
        ]);

        $stripe = new StripeClient(opt('STRIPE_SECRET_KEY'));
        $intent = $stripe->paymentIntents->retrieve($request->payment_intent, []);

        if ($intent->status == 'succeeded') {
            $meta = $intent->metadata;

            // update sale status
            $sale = TokenSale::find($meta->sale_id);

            if ($sale->status == 'paid') {
                abort(403);
            }

            $sale->status = 'paid';
            $sale->save();

            // add to user balance
            $request->user()->increment('tokens', $sale->tokens);

            return Inertia::render('Tokens/CardSuccess', compact('sale'));
        } else {
            $request->session()->flash('message', __("Payment not complete but: :intentStatus", ['intentStatus' => $intent->status]));
            return back();
        }
    }
}
