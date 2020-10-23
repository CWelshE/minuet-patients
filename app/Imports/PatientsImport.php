<?php

namespace App\Imports;

use App\Models\Patient;
use Maatwebsite\Excel\Concerns\ToModel;

class PatientsImport implements ToModel
{
    /**
    * Import patient data from the CSV.
    *
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Patient([
            'first_name' => $row[0],
            'last_name' => $row[1],
            'date_of_birth' => $row[2],
            'phone_number' => $row[3]
        ]);
    }
}
