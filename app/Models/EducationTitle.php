<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EducationTitle extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'study_title', 'school_name', 'pdf_path'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
