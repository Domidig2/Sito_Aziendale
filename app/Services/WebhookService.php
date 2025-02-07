<?
namespace App\Services;

use App\Models\Donation;
use Illuminate\Support\Facades\Log;

class WebhookService
{
    // Gestisce gli eventi del Webhook
    // public function handleEvent($event)
    // {
    //     // Gestisci i tipi di eventi
    //     switch ($event->type) {
    //         case 'payment_intent.succeeded':
    //             $this->handlePaymentIntentSucceeded($event->data->object); // PaymentIntent
    //             break;

    //         default:
    //             Log::info('Evento webhook non gestito: ' . $event->type);
    //             break;
    //     }
    // }

    // // Gestisce l'evento payment_intent.succeeded
    // private function handlePaymentIntentSucceeded($paymentIntent)
    // {
    //     Log::info("Metadati PaymentIntent:", (array) $paymentIntent->metadata);

    //     $amount = $paymentIntent->amount_received / 100;  // Amount in euro
    //     $userId = $paymentIntent->metadata->user_id;
    //     $donationType = $paymentIntent->metadata->donation_type;
        
    //     // Salva la donazione nel database
    //     Donation::create([
    //         'user_id' => $userId,
    //         'donation_type' => $donationType,  
    //         'amount' => $amount,
    //     ]);

    //     Log::info("Donazione ricevuta: {$amount} {$donationType} per l'utente {$userId}");
    // }
}
