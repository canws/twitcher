<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlanSell extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'subscription_plan',
        'price',
        'gateway',
        'status',
        'expire_date',
    ];
}
