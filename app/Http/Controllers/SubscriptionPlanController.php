<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use Inertia\Inertia;

class SubscriptionPlanController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth')->except(['getTokens']);
    }
    public function getSubscription()
    {
        $packs = SubscriptionPlan::orderBy('subscription_price')->get(); 
        return Inertia::render('Subscriptionplan/Packages', compact('packs'));
    }

    public function selectGateways(SubscriptionPlan $tokenPack)
    {  
        $paypalEnabled = opt('paypalEnable');
        $stripeEnabled = opt('stripeEnable');
        $bankEnabled = opt('bankEnable');
        $ccbillEnabled = opt('ccbillEnable');

        $paypalImg = asset('images/paypal-btn.png');
        $stripeImg = asset('images/stripe-cards.png');
        $ccbillImg = asset('images/ccbill-pay.png');
        $bankImg = asset('images/bank-transfer.png');

        return Inertia::render(
            'Subscriptionplan/Payment-Method',
            compact(
                'tokenPack',
                'paypalEnabled',
                'stripeEnabled',
                'bankEnabled',
                'ccbillEnabled',
                'paypalImg',
                'stripeImg',
                'bankImg',
                'ccbillImg',
                'bankImg'
            )
        );
    }
}
