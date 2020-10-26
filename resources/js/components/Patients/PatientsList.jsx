import { useState, useEffect } from "react";
import Patient from "./Patient.jsx";
import AppointmentsList from "../Appointments/AppointmentsList.jsx";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from "../../styles/constants.js";
import "fontsource-roboto";

// Styles of the container holding both patients and appointments inside
// of their associated unordered lists
const containerStyles = css`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 4rem);
  padding: 2rem;
  width: calc(95vw - 2rem);
  align-self: center;
  @media (max-width: 420px) {
    flex-direction: column;
    padding: 0;
    width: 100vw;
  }
`;

// Styles of the unordered list of Patients
const patientsStyles = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  font-family: ${styles.typography.fontFamily};
  scrollbar-width: thin;
  border-bottom-left-radius: 5px;
  @media (max-width: 420px) {
    border-radius: 0;
  }
`;

// Styles of the unordered list of Appointments
const appointmentsStyles = css`
  flex: 2;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: ${styles.colors.primary};
  font-family: ${styles.typography.fontFamily};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (max-width: 420px) {
    border-radius: 0;
  }
`;

const searchStyles = css`
  background-color: ${styles.colors.secondary};
  border: none;
  border-top-left-radius: 5px;
  flex-shrink: 0;
  font-size: ${styles.typography.caption};
  padding: 1rem;
`;

/**
 * List all available `Patient`s. Container component.
 */
const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelected] = useState({});
  const [filterVal, setFilterVal] = useState("");

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
        <input
          type="text"
          value={filterVal}
          css={searchStyles}
          onChange={(e) => setFilterVal(e.target.value)}
        />
        {isLoading
          ? "Loading Patients.."
          : patientItems.filter((e) => {
              return (e.props.firstName + e.props.lastName)
                .toString()
                .includes(filterVal);
            })}
      </ul>
      <ul css={appointmentsStyles}>
        <AppointmentsList patient={selectedPatient} />
      </ul>
    </div>
  );
};

export default PatientsList;
