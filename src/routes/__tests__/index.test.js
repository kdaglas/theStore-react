import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/index';


describe('The store', () => {
  it('should reach the store without crushing', () => {
    const component = shallow(<Routes />);
    expect(component).toMatchSnapshot();
  });
});
