import React from "react";
import renderer from "react-test-renderer";
import Appointment from "./Appointment.jsx";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Start Enzyme adapter for React
configure({ adapter: new Adapter() });

it("renders equally compared to snapshot", () => {
  const apptProps = {
    apptNum: 1,
    date: "03-24-1994",
    time: "15:30",
    type: "Vaccination",
  };
  const tree = renderer.create(<Appointment {...apptProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("has info from props", () => {
  const appt = shallow(
    <Appointment
      apptNum={2}
      date={"12/20/1990"}
      time={"1:00 PM"}
      type={"Short Visit"}
    />
  );
  expect(appt.find("h3").html()).toBe("<h3>Appointment 2</h3>");
});
