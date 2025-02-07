<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\EducationTitleUpdateRequest;

class EducationTitleController extends Controller
{
    public function updateEducationTitle(EducationTitleUpdateRequest $request)
    {
        $user = User::find(Auth::id());

        $pdfPath = null;
        if ($request->hasFile('pdf_path') && $request->file('pdf_path')->isValid()) {

            $pdfPath = $request->file('pdf_path')->store('educationTitle', 'public');
        }


        $user->educationTitle()->updateOrCreate(
            ['user_id' => $user->id],
            array_merge($request->validated(), ['pdf_path' => $pdfPath])
        );

        return response()->json([
            'message' => 'Certificate updated successfully',
            'user' => $user->load('certificate'),
        ]);

    }
}
