<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;
    
    /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
    protected $fillable = [
        'name',
        'surname',
        'email',
        'password',
        
    ];
    
    /**
    * The attributes that should be hidden for serialization.
    *
    * @var array<int, string>
    */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    
    /**
    * Get the attributes that should be cast.
    *
    * @return array<string, string>
    */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    
    public function donations()
    {
        return $this->hasMany(Donation::class);
    }

    public function mindsetResult()
    {
        return $this->hasMany(MindsetResult::class);
    }
    
    public function educationTitles()
    {
        return $this->hasMany(EducationTitle::class);
    }
    public function certificates()
    {
        return $this->hasMany(Certificate::class);
    }
    public function workPositions()
    {
        return $this->hasMany(WorkPosition::class);
    }
    
    public function personalData()
    {
        return $this->hashOne(PersonalData::class);
    }
    
}
