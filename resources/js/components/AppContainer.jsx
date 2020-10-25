import React, { useState } from "react";
import PatientsList from "./Patients/PatientsList.jsx";

/**
 * Main application container.
 */
const AppContainer = () => {
  return (
    <div className="app-container">
      <PatientsList />
    </div>
  );
};

export default AppContainer;
