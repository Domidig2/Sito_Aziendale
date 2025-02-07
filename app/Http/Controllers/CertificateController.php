<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CertificateUpdateRequest;

class CertificateController extends Controller
{
    public function updateCertificate(CertificateUpdateRequest $request)
    {
        $user = User::find(Auth::id());


        $pdfPath = null;
        if ($request->hasFile('pdf_path') && $request->file('pdf_path')->isValid()) {

            $pdfPath = $request->file('pdf_path')->store('certificates', 'public');
        }


        $user->certificate()->updateOrCreate(
            ['user_id' => $user->id],
            array_merge($request->validated(), ['pdf_path' => $pdfPath])
        );

        return response()->json([
            'message' => 'Certificate updated successfully',
            'user' => $user->load('certificate'),
        ]);
    }
}
