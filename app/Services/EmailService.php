<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Http;

class EmailService
{
    public function sendTemplate(int $templateId, array $to, array $params)
    {
        try {
            $payload = [
                "to" => $to,
                "templateId" => $templateId,
                "params" => $params,
            ];




            // Invio della richiesta
            $response = Http::withHeaders([
                "api-key" => config('services.brevo.api-key'),
                "Content-Type" => "application/json",
            ])->post("https://api.brevo.com/v3/smtp/email", $payload);

            if (!$response->successful()) {
                throw new Exception('Errore nell\'invio dell\'email: ' . $response->body());
            }

            return $response->json();

        } catch (Exception $e) {
            return [
                'status' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }

    
}
