import React, { useState, useEffect } from "react";
import Appointment from "./Appointment.jsx";
import PropTypes from "prop-types";

/**
 * List of Appointment items dictated by a Patient ID.
 */
const AppointmentsList = (props) => {
  const [appointments, setAppointments] = useState([]);

  console.log(props.patientId);
  const getAppointments = async (patient) => {
    if (patient !== undefined) {
      const response = await fetch(`/api/patients/${patient}/appts`);
      const data = await response.json();

      setAppointments(data);
    }
  };

  useEffect(() => {
    getAppointments(props.patientId);
  }, [props.patientId]);

  const appointmentItems = appointments.map((appt, idx) => {
    return (
      <Appointment
        key={idx}
        patientName={appt["patient_name"]}
        date={appt["start_date"]}
        time={appt["start_time"]}
        type={appt["appt_type"]}
      />
    );
  });

  const PleaseSelect = (
    <h2 className={"appt-list-select"}>
      {"Please select a patient to view their appointments."}
    </h2>
  );

  const shouldRender = appointments.length > 0;
  return shouldRender ? appointmentItems : PleaseSelect;
};

AppointmentsList.propTypes = {
  patientId: PropTypes.number,
};

export default AppointmentsList;
