<?php

namespace App\Imports;

use App\Models\Appointment;
use Maatwebsite\Excel\Concerns\ToModel;

class AppointmentsImport implements ToModel
{
    /**
    * Import appointments.csv with Laravel Excel
    *
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Appointment([
            'patient_name' => $row[0],
            'start_date' => $row[1],
            'start_time' => $row[2],
            'appt_type' => $row[3]
        ]);
    }
}
