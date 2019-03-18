import React from 'react';
import { shallow } from 'enzyme';
import Login from '../loginForm';


describe('login form component', () => {
  it('should return the form without crushing', () => {
    const component = shallow(<Login />);
    expect(component).toMatchSnapshot();
  });
});