<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Imports\PatientsImport;
use Maatwebsite\Excel\Facades\Excel;

class PatientsSeeder extends Seeder
{
    /**
     * Use Laravel Excel to import patients.csv
     *
     * @return void
     */
    public function run()
    {
        Excel::import(new PatientsImport, 'patients.csv');
    }
}
