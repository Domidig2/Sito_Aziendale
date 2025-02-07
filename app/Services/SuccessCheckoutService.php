<?php
namespace App\Services;

use App\Models\Donation;
use App\Services\EmailService;
use Illuminate\Support\Facades\Log;
use Exception;

class SuccessCheckoutService
{
    protected $emailService;

    public function __construct(EmailService $emailService)
    {
        $this->emailService = $emailService;
    }

   
    public function getLatestDonationByUser($userId)
    {
        $donation = Donation::where('user_id', $userId)->latest()->first();

        return $donation;
    }


    public function sendThankYouEmail(Donation $donation)
    {
        $user = $donation->user;

        $this->emailService->sendTemplate(
            3,
            [
                ["email" => $user->email, "name" => $user->name]
            ],
            [
                "name" => $user->name,
                "amount" => $donation->amount,
            ]
        );
    }

    public function logError(Exception $e)
    {
        Log::error("Errore durante la gestione della donazione: " . $e->getMessage());
    }
}
