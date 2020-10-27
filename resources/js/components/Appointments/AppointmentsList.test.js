import React from "react";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AppointmentsList from "./AppointmentsList.jsx";

// Start Enzyme adapter for React
configure({ adapter: new Adapter() });

const apptsListProps = {
  patient: {
    id: 7,
  },
};

it("renders equally compared to snapshot", () => {
  const tree = renderer
    .create(<AppointmentsList {...apptsListProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// TODO: Research async API methods for testing such functionality of a
// component without arbitrary wait times
