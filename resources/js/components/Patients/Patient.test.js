import React from "react";
import renderer from "react-test-renderer";
import Patient from "./Patient.jsx";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Start Enzyme adapter for React
configure({ adapter: new Adapter() });

const patientProps = {
  firstName: "John",
  lastName: "Doe",
  dob: "06-12-1985",
  phone: "123-456-7890",
  handleClick: () => {},
};

it("renders equally compared to snapshot", () => {
  const tree = renderer.create(<Patient {...patientProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("has patient info from props", () => {
  const patient = renderer.create(<Patient {...patientProps} />).toJSON();
  expect(patient.children[0].children).toStrictEqual(["John", " ", "Doe"]);
});
