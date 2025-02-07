<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('mindset_results', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('name');
            $table->string('email');
            $table->string('cluster');
            $table->timestamp('completed_at')->nullable(); 
            $table->timestamps(); 
    
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }
    
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('mindset_results');
        Schema::enableForeignKeyConstraints();
    }
};