<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\Appointment;

class AppointmentsController extends Controller
{
    public function find($patientId) {
        $patient = Patient::find($patientId);
        $patientName = join(" ", [$patient->first_name, $patient->last_name]);
        return response(Appointment::cursor()->filter(
            function ($appt) use ($patientName) {
                return $appt->patient_name === $patientName;
        }));
    }
}
