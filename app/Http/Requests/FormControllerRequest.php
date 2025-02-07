<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormControllerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'FirstName' => 'required|string|max:255',
            'SurName' => 'required|string|max:255',
            'email' => 'required|email',
            'phoneNumber' => 'required|string|max:20',
            'privacy_consent_institutional' => 'required|accepted',

        ];
    }

    public function messages()
    {
        return [
            'FirstName.required' => 'Il nome è obbligatorio.',
            'SurName.required' => 'Il cognome è obbligatorio.',
            'email.required' => "L'indirizzo email è obbligatorio.",
            'email.email' => "L'indirizzo email non è valido.",
            'phoneNumber.required' => 'Il numero di telefono è obbligatorio.',
            'phoneNumber.min' => 'Il numero di telefono deve contenere almeno 10 caratteri.',
            'phoneNumber.max' => 'Il numero di telefono deve contenere massimo 10 caratteri.',
            'privacy_consent_institutional.required' => "L'accettazione è obbligatoria.",
            'privacy_consent_institutional.accepted' => "Devi accettare il trattamento dei dati personali per finalità istituzionali.",
           
            
        ];
    }
}
