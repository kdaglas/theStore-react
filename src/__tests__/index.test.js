import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../index';


describe('The routes page', () => {
  it('should render all Routes without crushing', () => {
    const component = shallow(<Routes />);
    expect(component).toMatchSnapshot();
  });
});
