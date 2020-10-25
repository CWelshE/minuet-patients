import React, { useState, useEffect } from "react";
import Patient from "./Patient.jsx";

// Lists all available `Patient`s. Container component.
const PatientsList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  // Get patient data from API
  const getPatients = async () => {
    const response = await fetch("/api/patients");
    const data = await response.json();
    setPatients(data);
  };

  // Map patients array to a list of Patients
  const patientItems = patients.map((patient, idx) => {
    return (
      <Patient
        key={idx}
        firstName={patient["first_name"]}
        lastName={patient["last_name"]}
        dob={patient["date_of_birth"]}
        phone={patient["phone_number"]}
      />
    );
  });

  // Flash loading text prior to fetch() completion
  const isLoading = patients.length === 0;
  return <ul>{isLoading ? "Loading Patients.." : patientItems}</ul>;
};

export default PatientsList;
