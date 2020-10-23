<?php

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

Route::get('patients', function() {
    return response(['john doe', 'jane doe'], 200);
});

Route::get('patients/{patient}', function($patientId) {
    return response()->json(['patientId' => "{$patientId}"], 200);
});

Route::post('patients/{patient}', function() {
    return response()->json([
        'message' => 'Patient created.'
    ], 200);
});

Route::get('patients/{patient}/appts', function($patientId) {
    return response()->json(['apptId' => "{$patientId}"], 200);
});
