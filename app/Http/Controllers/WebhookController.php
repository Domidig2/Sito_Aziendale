<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\Stripe;
use Stripe\Webhook;
use Stripe\Exception\SignatureVerificationException;

class WebhookController extends Controller
{
    public function webhook(Request $request)
    {
         // Ottieni il payload grezzo dal corpo della richiesta
         $payload = $request->getContent();

         // Decodifica il payload come oggetto JSON
         $event = json_decode($payload);
 
         if (!$event || !isset($event->type)) {
             Log::error('Evento webhook non valido');
             return response('Invalid webhook payload', 400);
         }
 
         // Gestisci i tipi di eventi
         switch ($event->type) {
             case 'payment_intent.succeeded':
                 $paymentIntent = $event->data->object; // PaymentIntent
                 $this->handlePaymentIntentSucceeded($paymentIntent);
                 break;
 
             default:
                 Log::info('Evento webhook non gestito: ' . $event->type);
                 break;
         }
 
         return response('Webhook gestito correttamente', 200);
    }

    // Funzione per gestire l'evento payment_intent.succeeded
    private function handlePaymentIntentSucceeded($paymentIntent)
    {
        Log::info("Metadati PaymentIntent:", (array) $paymentIntent->metadata);
        // Recupera i dati dell'evento, ad esempio:
        $amount = $paymentIntent->amount_received / 100;  // Amount in euro
        
        $userId = $paymentIntent->metadata->user_id; // Assicurati di aggiungere il user_id ai metadata
        $donationType = $paymentIntent->metadata->donation_type;
        
        // Salva la donazione nel database
       Donation::create([
            'user_id' => $userId,
            'donation_type' => $donationType,  // Puoi cambiarlo in base alla tua logica
            'amount' => $amount,
            //'currency' => $currency,
        ]);

        Log::info("Donazione ricevuta: {$amount} {$donationType} per l'utente {$userId}");

       
    }

    // Funzione per gestire l'evento payment_method.attached
    private function handlePaymentMethodAttached($paymentMethod)
    {
        // Gestisci l'allegato di un nuovo metodo di pagamento
        $paymentMethodId = $paymentMethod->id;
        Log::info("Nuovo metodo di pagamento allegato: {$paymentMethodId}");
    }
}
