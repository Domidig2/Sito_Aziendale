<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('formdbs', function (Blueprint $table) {
            $table->id();
            $table->string('FirstName');
            $table->string('SurName');
            $table->string('email')->unique();
            $table->string('phoneNumber')->unique();
            $table->text('body')->nullable();
            $table->boolean('privacy_consent_institutional');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formdbs');
    }
};
