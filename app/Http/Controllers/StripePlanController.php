<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\SubscriptionPlanSell;
use Inertia\Inertia;
use Carbon\Carbon;
use Stripe\StripeClient as StripeClient;

class StripePlanController extends Controller
{
       //    function for purchase subscription plan

       public function purchasesss(SubscriptionPlan $tokPack, Request $request)
       {   
          $stripeImg = asset('images/stripe-cards.png');
           $publicKey = opt('STRIPE_PUBLIC_KEY');
          
           $currentDate = Carbon::now(); 
           if($tokPack->status == 1){
            $expireDate = $currentDate->addMonth()->toDateString(); 
           }
           if($tokPack->status == 2){
            $expireDate = $currentDate->addMonth(3)->toDateString(); 
           }
           if($tokPack->status == 3){
            $expireDate = $currentDate->addMonth(6)->toDateString(); 
           }
           if($tokPack->status == 4){
            $expireDate = $currentDate->addMonth(12)->toDateString(); 
           }
           $expireDate = $currentDate->addMonth(); 
           $sale = SubscriptionPlanSell::create([
             'user_id' => $request->user()->id,
             'subscription_plan' => $tokPack->subscription_name,
             'price' => $tokPack->subscription_price,
             'expire_date' =>  $expireDate,
             'status' => 'active',
             'gateway' => 'Stripe',
          ]);   
            
          $saleId = $sale->id;
          $cs = $this->paymentIntent($tokPack, $sale->id);
   
           return Inertia::render('Subscriptionplan/StripeForm', compact('tokPack', 'stripeImg', 'publicKey', 'cs', 'saleId'));
       }
   
       // get client secret
       public function paymentIntent(SubscriptionPlan $tokenPack, $saleId)
       {
           $stripe = new StripeClient(opt('STRIPE_SECRET_KEY'));
   
           $stripeAmount = $tokenPack->subscription_price*100;
   
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
   
       public function processOrders(Request $request)
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
               $sale = SubscriptionPlanSell::find($meta->sale_id);
   
               if ($sale->status == 'paid') {
                   abort(403);
               }
   
               $sale->status = 'paid';
               $sale->save();
   
               // add to user balance
            //    $request->user()->increment('tokens', $sale->tokens);
   
               return Inertia::render('Subscriptionplan/CardSuccess', compact('sale'));
           } else {
               $request->session()->flash('message', __("Payment not complete but: :intentStatus", ['intentStatus' => $intent->status]));
               return back();
           }
       }
}
