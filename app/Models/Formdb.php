<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formdb extends Model
{
    use HasFactory;

    protected $fillable = [
        'FirstName',
        'SurName',
        'email',
        'phoneNumber',
        'body',
        'privacy_consent_institutional',

    ];
}
