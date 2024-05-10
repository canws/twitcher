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
        Schema::create('gallery_sales', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->integer('gallery_id')->nullable();
            $table->integer('streamer_id')->nullable();
            $table->decimal('price', 8, 2)->default(0);
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
        Schema::dropIfExists('gallery_sales');
    }
};
