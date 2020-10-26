import React, { useState, useEffect } from "react";
import Patient from "./Patient.jsx";
import AppointmentsList from "../Appointments/AppointmentsList.jsx";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from "../../styles/constants.js";
import "fontsource-roboto";

const containerStyles = css`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 4rem);
  padding: 2rem;
  width: calc(95vw - 4rem);
  align-self: center;
`;

const patientsStyles = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  font-family: ${styles.typography.fontFamily};
  scrollbar-width: thin;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const appointmentsStyles = css`
  flex: 2;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: ${styles.colors.primary};
  font-family: ${styles.typography.fontFamily};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

/**
 * List all available `Patient`s. Container component.
 */
const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelected] = useState({});

  // Get patient data from API
  const getPatients = async () => {
    const response = await fetch("/api/patients");
    const data = await response.json();
    setPatients(data);
  };

  useEffect(() => {
    getPatients();
  }, []);

  // Map patients array to a list of Patients
  const patientItems = patients.map((patient, idx) => {
    return (
      <Patient
        key={idx}
        handleClick={() => setSelected(patient)}
        firstName={patient["first_name"]}
        lastName={patient["last_name"]}
        dob={patient["date_of_birth"]}
        phone={patient["phone_number"]}
      />
    );
  });

  // Flash loading text prior to fetch() completion
  const isLoading = patients.length === 0;
  return (
    <div css={containerStyles}>
      <ul css={patientsStyles}>
        {isLoading ? "Loading Patients.." : patientItems}
      </ul>
      <ul css={appointmentsStyles}>
        <AppointmentsList patient={selectedPatient} />
      </ul>
    </div>
  );
};

export default PatientsList;
