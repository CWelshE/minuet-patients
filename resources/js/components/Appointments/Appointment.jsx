import React from "react";
import PropTypes from "prop-types";

/**
 * A single Appointment in an Appointments list.
 * Presentational component only.
 */
const Appointment = (props) => (
  <div className={"appointment"}>
    <h3>{props.patientName}</h3>
    <span>Date: {props.date}</span>
    <span>Time: {props.time}</span>
    <span>Type: {props.type}</span>
  </div>
);

Appointment.propTypes = {
  patientName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Appointment;
