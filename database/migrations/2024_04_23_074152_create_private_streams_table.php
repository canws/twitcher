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
        Schema::create('private_streams', function (Blueprint $table) {
            $table->id();
            $table->integer('streamer_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->decimal('tokens', 8, 2)->nullable();
            $table->string('stream_time')->nullable();
            $table->text('message')->nullable();
            $table->string('status')->default('pending');
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
        Schema::dropIfExists('private_streams');
    }
};
