<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Donation;
use Illuminate\Http\Request;
use App\Services\EmailService;
use App\Services\StripeService;


use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use GrahamCampbell\ResultType\Success;
use App\Services\SuccessCheckoutService;
use Illuminate\Support\Facades\Redirect;

class StripeController extends Controller
{
    protected $stripeService;
    protected $successCheckoutService;
   
    
    public function __construct(StripeService $stripeService, SuccessCheckoutService $successCheckoutService)
    {
        $this->stripeService = $stripeService;
        $this->successCheckoutService = $successCheckoutService;
        
    }
    
    // Funzione generica per gestire il checkout
    private function handleCheckout(callable $checkoutFunction)
    {
        try {
            $session = $checkoutFunction();
            return response()->json(['url' => $session->url]);
        } catch (Exception $e) {
            
            return response()->json(['error' => 'Errore durante il checkout.'], 500);
        }
    }
    

    public function familyCheckout(Request $request)
    {
        return $this->handleCheckout(function() {
            return $this->stripeService->familyCheckout(route('success'), route('error'));
        });
    }

    public function schoolCheckout(Request $request)
    {
        return $this->handleCheckout(function() {
            return $this->stripeService->schoolCheckout(route('success'), route('error'));
        });
    }

    public function agencyCheckout(Request $request)
    {
        return $this->handleCheckout(function() {
            return $this->stripeService->agencyCheckout(route('success'), route('error'));
        });
    }
    
    
    
    public function success()
    {
        try {
            // Recupera l'ultima donazione dell'utente autenticato
            $donation = $this->successCheckoutService->getLatestDonationByUser(Auth::id());

            if ($donation) {
                // Invia email di ringraziamento
                $this->successCheckoutService->sendThankYouEmail($donation);
                return Redirect::route('dashboard');
            } else {
                return Redirect::route('register');
            }
        } catch (Exception $e) {
            $this->successCheckoutService->logError($e);
            return Redirect::route('error');
        }
    }

        public function error()
        {
            return Inertia::render('Welcome', [
                'errors' => [
                    'message' => 'Si è verificato un errore durante la richiesta.'
                    ]
                ]);
            }
        }