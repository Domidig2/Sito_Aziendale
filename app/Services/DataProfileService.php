<?php

namespace App\Services;

use App\Models\User;
use App\Models\DataProfile;

class DataProfileService{
    public function updatePersonalData(User $user, array $data): void
    {
        $user->update($data); // Aggiorna i dati nel database
    }
}