<?php
namespace App\Services;

use Stripe\StripeClient;
use Stripe\Checkout\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class StripeService
{
    protected $stripe;

    public $data = [
        'family' => [
            'name' => 'Famiglia',
            'amount' => 50,
        ],
        'school' => [
            'name' => 'Scuola',
            'amount' => 500,
        ],
        'agency' => [
            'name' => 'Azienda',
            'amount' => 5000,
        ],
    ];

    public function __construct()
    {
        $this->stripe = new StripeClient(config('services.stripe.stripePrivateKey'));
    }

    private function createCheckoutSession(array $items, string $successUrl, string $cancelUrl, string $donationType): Session
    {
        try {
            Log::info("Creazione della sessione di checkout per il tipo di donazione: $donationType");

            $session = $this->stripe->checkout->sessions->create([
                'payment_method_types' => ['card', 'paypal'],
                'submit_type' => 'donate',
                'line_items' => $items,
                'mode' => 'payment',
                'success_url' => $successUrl,
                'cancel_url' => $cancelUrl,
                'payment_intent_data' => [
                    'metadata' => [
                        'user_id' => Auth::id(),
                        'donation_type' => $donationType,
                    ],
                ],
            ]);

            Log::info("Sessione di checkout creata con successo. ID Sessione: {$session->id}");
            return $session;
        } catch (\Exception $e) {
            Log::error("Errore durante la creazione della sessione di checkout per $donationType: " . $e->getMessage());
            throw $e; // Rilancia l'eccezione per gestirla nel controller o dove viene richiamata.
        }
    }

    public function familyCheckout(string $successUrl, string $cancelUrl): Session
    {
        try {
            Log::info("Inizio creazione sessione checkout per donazione tipo: Famiglia");
            $items = [
                [
                    'price_data' => [
                        'currency' => 'eur',
                        'product_data' => [
                            'name' => $this->data['family']['name'],
                        ],
                        'unit_amount' => $this->data['family']['amount'] * 100,
                    ],
                    'quantity' => 1,
                ],
            ];

            return $this->createCheckoutSession($items, $successUrl, $cancelUrl, 'family');
        } catch (\Exception $e) {
            Log::error("Errore durante la creazione della sessione di checkout per Famiglia: " . $e->getMessage());
            throw $e;
        }
    }

    public function agencyCheckout(string $successUrl, string $cancelUrl): Session
    {
        try {
            Log::info("Inizio creazione sessione checkout per donazione tipo: Azienda");
            $items = [
                [
                    'price_data' => [
                        'currency' => 'eur',
                        'product_data' => [
                            'name' => $this->data['agency']['name'],
                        ],
                        'unit_amount' => $this->data['agency']['amount'] * 100,
                    ],
                    'quantity' => 1,
                ],
            ];

            return $this->createCheckoutSession($items, $successUrl, $cancelUrl, 'agency');
        } catch (\Exception $e) {
            Log::error("Errore durante la creazione della sessione di checkout per Azienda: " . $e->getMessage());
            throw $e;
        }
    }

    public function schoolCheckout(string $successUrl, string $cancelUrl): Session
    {
        try {
            Log::info("Inizio creazione sessione checkout per donazione tipo: Scuola");
            $items = [
                [
                    'price_data' => [
                        'currency' => 'eur',
                        'product_data' => [
                            'name' => $this->data['school']['name'],
                        ],
                        'unit_amount' => $this->data['school']['amount'] * 100,
                    ],
                    'quantity' => 1,
                ],
            ];

            return $this->createCheckoutSession($items, $successUrl, $cancelUrl, 'school');
        } catch (\Exception $e) {
            Log::error("Errore durante la creazione della sessione di checkout per Scuola: " . $e->getMessage());
            throw $e;
        }
    }
}
