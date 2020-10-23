<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Imports\AppointmentsImport;
use Maatwebsite\Excel\Facades\Excel;

class AppointmentsSeeder extends Seeder
{
    /**
     * Use Laravel Excel to import appointments.csv
     *
     * @return void
     */
    public function run()
    {
        Excel::import(new AppointmentsImport, 'appointments.csv');
    }
}
