<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorkPositionUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'work_position' => 'nullable|string|max:255',
            'company_name' => 'nullable|string|max:255',
            'pdf_path' => 'nullable|file|mimes:pdf|max:10240',
        ];
    }
}
