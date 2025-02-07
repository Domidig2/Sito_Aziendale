<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\File;


use Inertia\Inertia;
use App\Models\Formdb;
use App\Services\EmailService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\FormControllerRequest;

class FormController extends Controller
{
    public function form_submit(FormControllerRequest $request, EmailService $emailService)
    {
        DB::beginTransaction();

        try {


            // Salvataggio dati nel database
            $user = Formdb::create([

                'FirstName' => $request->input('FirstName'),
                'SurName' => $request->input('SurName'),
                'email' => $request->input('email'),
                'phoneNumber' => $request->input('phoneNumber'),
                'body' => $request->input('body'),
                'privacy_consent_institutional' => $request->has('privacy_consent_institutional'),

            ]);

            // Invio dell'email con allegato PDF
            $response = $emailService->sendTemplate(
                1,
                [
                    [
                        "email" => "domi.ddg97@gmail.com",
                        "name" => "Domenico",
                        ]
                    ],
                    [
                        "FirstName" => $request->input('FirstName'),
                        "SurName" => $request->input('SurName'),
                        "email" => $request->input('email'),
                        "phoneNumber" => $request->input('phoneNumber'),
                        "body" => $request->input('body'),
                        "privacy_consent_institutional" => $request->has('privacy_consent_institutional'),

                    ],

                );

                DB::commit();

                return Redirect::to('/')->with('message', 'Richiesta inviata con successo, grazie per averci contattati.');

            } catch (Exception $e) {

                DB::rollBack();
                return Redirect::to('/')->with('message', 'Ops!... Qualcosa non funziona!');
            }
        }
    }
