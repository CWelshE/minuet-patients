import { useState, useEffect } from "react";
import Appointment from "./Appointment.jsx";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from "../../styles/constants.js";
import "fontsource-roboto";

const appointmentsStyles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-left: 3px solid rgba(0, 0, 0, 0.3);
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
  padding: 2rem;
  flex: 2;
  background-color: ${styles.colors.secondary};
  font-family: ${styles.typography.fontFamily};
`;

const patientHeaderStyles = css`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 2rem 2rem;
  color: white;
  min-height: 144px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  border-left: 2px solid rgba(0, 0, 0, 0.3);

  & h2 {
    font-size: ${styles.typography.header};
  }

  & div {
    display: flex;
    justify-content: space-between;
    max-width: 300px;
  }
`;

/**
 * List of Appointment items dictated by a Patient ID.
 */
const AppointmentsList = (props) => {
  const [appointments, setAppointments] = useState([]);

  // Query the API for appointments based on a Patient ID
  const getAppointments = async (patient) => {
    if (patient !== undefined) {
      const response = await fetch(`/api/patients/${patient}/appts`);
      const data = await response.json();

      setAppointments(data);
    }
  };

  useEffect(() => {
    getAppointments(props.patient["id"]);
  }, [props.patient["id"]]);

  // Map the JSON data to appointment elements
  const appointmentItems = appointments.map((appt, idx) => {
    return (
      <Appointment
        key={idx}
        apptNum={idx + 1}
        date={appt["start_date"]}
        time={appt["start_time"]}
        type={appt["appt_type"]}
      />
    );
  });

  // Selected patient info at the top of the appts listing
  const patientHeader = (patient) => {
    return Object.keys(patient).length > 0 ? (
      <div css={patientHeaderStyles}>
        <h2>{`${patient["first_name"]} ${patient["last_name"]}`}</h2>
        <div>
          <span>{"DOB"}</span>
          <span>{`${patient["date_of_birth"]}`}</span>
        </div>
        <div>
          <span>{"Phone Number"}</span>
          <span>{`${patient["phone_number"]}`}</span>
        </div>
      </div>
    ) : (
      <h2 css={patientHeaderStyles}>
        {"Please select a patient to view their appointments."}
      </h2>
    );
  };

  // Only render if we successfully retrieve appts
  const shouldRender = appointments.length > 0;
  return (
    <div>
      {patientHeader(props.patient)}
      {shouldRender ? (
        <ul css={appointmentsStyles}>{appointmentItems}</ul>
      ) : null}
    </div>
  );
};

AppointmentsList.propTypes = {
  patient: PropTypes.object,
};

export default AppointmentsList;
