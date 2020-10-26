import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from "../../styles/constants.js";

const patientStyles = css`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${styles.colors.primary};
  padding: 1rem;
  border-bottom: 1px solid ${styles.colors.secondary};
  & h3 {
    font-size: ${styles.typography.header};
  }

  & span {
    font-size: ${styles.typography.caption};
  }

  & h3,
  span {
    color: white;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  transition: all 0.15s;
`;

/**
 * Represents a single patient in a PatientsList. Presentational
 * component only.
 */
const Patient = (props) => (
  <div onClick={props.handleClick} className={"patient"} css={patientStyles}>
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
  handleClick: PropTypes.func.isRequired,
};

export default Patient;
