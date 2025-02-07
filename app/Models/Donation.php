<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    protected $fillable = ['user_id', 'amount', 'stripe_payment_id', 'donation_type'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
