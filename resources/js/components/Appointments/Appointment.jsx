import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from "../../styles/constants.js";

const appointmentStyles = css`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  color: ${styles.colors.primary};
  font-family: ${styles.typography.fontFamily};
`;

/**
 * A single Appointment in an Appointments list.
 * Presentational component only.
 */
const Appointment = (props) => (
  <div css={appointmentStyles} className={"appointment"}>
    <h3>Appointment {props.apptNum}</h3>
    <span>Date: {props.date}</span>
    <span>Time: {props.time}</span>
    <span>Type: {props.type}</span>
  </div>
);

Appointment.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  apptNum: PropTypes.number.isRequired,
};

export default Appointment;
