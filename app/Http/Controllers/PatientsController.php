<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientsController extends Controller
{
    public function index() {
        return Patient::all();
    }

    public function show(Patient $patient) {
        return $patient;
    }

    public function create(Request $request) {
        $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'date_of_birth' => 'required',
            'phone_number' => 'required'
        ]);

        $patient = Patient::create($request->all());
        return response()->json($patient, 201);
    }

    public function update(Request $request, Patient $patient) {
        $patient->update($request->all());
        return response()->json($patient, 200);
    }
}
