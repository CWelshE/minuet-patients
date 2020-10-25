import React from "react";
import PropTypes from "prop-types";

// Represents a single patient in a PatientsList. Presentational
// component only.
const Patient = (props) => (
  <div className={"patient"}>
    <h3>
      {props.firstName} {props.lastName}
    </h3>
    <span>Date of Birth: {props.dob}</span>
    <span>Phone Number: {props.phone}</span>
  </div>
);

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Patient;
