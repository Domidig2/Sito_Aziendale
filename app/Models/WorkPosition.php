<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WorkPosition extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'work_position', 'company_name', 'pdf_path'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
