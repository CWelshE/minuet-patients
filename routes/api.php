<?php

use App\Models\Patient;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// GET all patients.
Route::get('patients', function() {
    return response(Patient::all(), 200);
});

// GET one patient.
Route::get('patients/{patient}', function($patientId) {
    return response(Patient::find($patientId), 200);
});

// POST one patient.
Route::post('patients/{patient}', function(Request $patient) {
    return Patient::create($patient);
});

// GET one patient's appointments info.
Route::get('patients/{patient}/appts', function($patientId) {
});
