<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PersonalDataUpdateRequest;
use App\Models\User;

class PersonalDataController extends Controller
{
    public function updateProfile(PersonalDataUpdateRequest $request)
    {

        $user = User::find(Auth::id());
        $user->personalData()->updateOrCreate(
            ['user_id' => $user->id],
            $request->validated()
        );

        return response()->json([
            'message' => 'Profilo aggiornato con successo',
            'user' => $user->load('personalData'),
        ]);
    }

}
