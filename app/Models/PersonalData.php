<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PersonalData extends Model
{
    use HasFactory;

    protected $table = 'personal_data';

    protected $fillable = [
        'user_id',
        'birth_date',
        'phone_number',
        'province',
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
