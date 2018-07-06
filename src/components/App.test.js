import { shallow } from 'enzyme';
import React from 'react';
import App from '.';

test('Expect App to render text: "Hey World"', () => {
  const app = shallow(<App message="Hey World" />);
  expect(app.text()).toBe('Hey World');
});
