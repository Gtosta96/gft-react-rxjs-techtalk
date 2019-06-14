import { shallow } from 'enzyme';
import React from 'react';

import App from './App';

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeDefined();
});
