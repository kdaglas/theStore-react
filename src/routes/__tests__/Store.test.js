import React from 'react';
import { shallow } from 'enzyme';
import store from '../../Store';


describe('The store', () => {
  it('should reach the store without crushing', () => {
    const component = shallow(<store />);
    expect(component).toMatchSnapshot();
  });
});