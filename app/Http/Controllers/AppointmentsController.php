<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Appointment;

class AppointmentsController extends Controller
{
    // From patientId's first+last name, find Appointments
    public function find($patientId) {
        $patient = Patient::find($patientId);
        $patientName = join(" ", [$patient->first_name, $patient->last_name]);

        // Cursor was here before, but returned malformed JSON. TODO:
        // Figure out how to rectify this query with a ::cursor->filter
        $appts = Appointment::where('patient_name', $patientName)->orderBy('start_date', 'desc')->get();

        return response($appts, 200);
    }
}
