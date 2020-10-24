<?php

namespace Tests\Feature;

use Tests\TestCase;

class AppointmentTest extends TestCase
{
    /**
     * Test that appointments are shown for patients.
     *
     * @return void
     */
    public function testAppointmentsNotEmptyForValidRequest()
    {
        $response = $this->get('/api/patients/1/appts');
        $respContent = $response->decodeResponseJson();
        $this->assertGreaterThan(0, count($respContent));
        $response->assertOk();
    }

    public function testAppointmentsEmptyForInvalidRequest() {
        $reponse = $this->get('/api/patients/invalid/appts');
        $reponse->assertStatus(500);
    }
}
