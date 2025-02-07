<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EducationTitleUpdateRequest extends FormRequest
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
            'study_title' => 'nullable|string|max:255',
            'school_name' => 'nullable|string|max:255',
            'pdf_path' => 'nullable|file|mimes:pdf|max:10240',
        ];
    }
}
