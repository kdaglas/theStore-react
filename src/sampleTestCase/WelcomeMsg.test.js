import React from 'react';
import { shallow } from 'enzyme';
import WelcomeMsg from './WelcomeMsg';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<WelcomeMsg />);
  return { wrapper, props };
}

describe('WelcomeMsg Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
