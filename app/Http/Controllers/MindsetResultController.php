<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MindsetResult;
use App\Services\EmailService;
use Illuminate\Support\Facades\Auth;

class MindsetResultController extends Controller
{
    protected $emailService;

    public function __construct(EmailService $emailService)
    {
        $this->emailService = $emailService;
    }
    public function saveCluster(Request $request)
    {
        
        $validated = $request->validate([
            'cluster' => 'required|string',
        ]);
        
        $user = Auth::user();
        
        MindsetResult::create([
            'user_id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'cluster' => $validated['cluster'],
            'completed_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $templateId = 4; 
        // Destinatario
        $to = [
            [
                "email" => "domi.ddg97@gmail.com", 
                "name" => "Direttore", 
            ],
        ];
        $params = [
            'userName' => $user->name,
            'userEmail' => $user->email,
            'cluster' => $validated['cluster'],
            'completedAt' => now()->format('d/m/Y H:i'),
        ];

        // Invio dell'email
        $response = $this->emailService->sendTemplate($templateId, $to, $params);
        
        return response()->json(['success' => true, 'message' => 'Test completato con successo.']);
    }

    public function canTakeTest(Request $request)
    {
        $userId = $request->user()->id;
        
        // Recupera i test completati dall'utente
        $tests = MindsetResult::where('user_id', $userId)
        ->orderBy('completed_at', 'asc')
        ->get();
        
        $now = now();
        
        if ($tests->isEmpty()) {
            return response()->json(['canTakeTest' => true]);
        }
        
        $firstTest = $tests->first();
        $secondTest = $tests->skip(1)->first();
        $thirdTest = $tests->skip(2)->first();
        
        if (!$secondTest && $firstTest->completed_at->addDays(90) > $now) {
            $remainingDays = $firstTest->completed_at->addDays(90)->diffInDays($now);
            return response()->json([
                'canTakeTest' => false,
                'message' => "Devi aspettare ancora $remainingDays giorni per rifare il test."
            ]);
        }
        
        if (!$thirdTest && $secondTest->completed_at->addDays(60) > $now) {
            $remainingDays = $secondTest->completed_at->addDays(60)->diffInDays($now);
            return response()->json([
                'canTakeTest' => false,
                'message' => "Devi aspettare ancora $remainingDays giorni per rifare il test."
            ]);
        }
        
        if ($thirdTest && $thirdTest->completed_at->addDays(60) > $now) {
            $remainingDays = $thirdTest->completed_at->addDays(60)->diffInDays($now);
            return response()->json([
                'canTakeTest' => false,
                'message' => "Devi aspettare ancora $remainingDays giorni per rifare il test."
            ]);
        }
        
        return response()->json(['canTakeTest' => true]);
    }
    
    
    
    
    
    public function showCluster(){
        
        $user = Auth::user(); 
        
        $results =MindsetResult::whith('user')->where('user_id', $user->id)->get();
        
        return response()->json($results, 200);
    }
    
}
