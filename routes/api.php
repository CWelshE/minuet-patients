<?php

use App\Http\Controllers\PatientsController;
use App\Http\Controllers\AppointmentsController;
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
Route::get('patients', [PatientsController::class, 'index']);

// GET one patient.
Route::get('patients/{patient}', [PatientsController::class, 'show']);

// POST and create one patient.
Route::post('patients', [PatientsController::class, 'create']);

// PUT patient info to update.
Route::put('patients/{patient}', [PatientsController::class, 'update']);

// GET one patient's appointment(s).
Route::get('patients/{patient}/appts', [AppointmentsController::class, 'find']);
