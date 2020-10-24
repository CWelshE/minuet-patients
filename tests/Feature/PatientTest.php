<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PatientTest extends TestCase
{
    /**
     * Test that /patients API functions as expected.
     *
     * @return void
     */
    public function testPatientsAreListedAtBaseRoute()
    {
        $response = $this->get('/api/patients');
        $response->assertStatus(200);
        $respContent = $response->decodeResponseJson();
        $this->assertGreaterThan(0, count($respContent));
    }

    public function testCanViewSinglePatient()
    {
        $response = $this->get('/api/patients/1');
        $response->assertStatus(200);
        $respContent = $response->decodeResponseJson();
        $this->assertEquals(7, count($respContent));
    }

    public function testCanCreateNewPatient()
    {
        $response = $this->postJson('/api/patients', [
            'first_name' => 'Cody',
            'last_name' => 'Welsh',
            'date_of_birth' => '03/24/1994',
            'phone_number' => '0000000000',
        ]);

        $response
            ->assertStatus(201)
            ->assertJson([
                'date_of_birth' => '03/24/1994',
            ]);
    }

}
