import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';


describe('Footer Component', () => {
  it('should render Footer without crushing', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
