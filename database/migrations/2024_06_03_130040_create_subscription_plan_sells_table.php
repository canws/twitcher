<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscription_plan_sells', function (Blueprint $table) {
            $table->id();
             $table->foreignId('user_id')->constrained();
            $table->integer('subscription_plan');
            $table->decimal('price', 10, 2);
            $table->dateTime('expire_date');
            $table->string('status');
            $table->string('gateway');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscription_plan_sells');
    }
};
