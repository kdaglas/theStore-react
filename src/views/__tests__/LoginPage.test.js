import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage, mapStateToProps } from '../LoginPage';


describe('LoginPage', () => {
  it('should render without crashing', () => {
    const props = {};
    const instance = new LoginPage(props);
    const wrapper = shallow(instance.render());
    expect(wrapper).toMatchSnapshot();
  });

  it('should redirect on acquiring a token', () => {
    const push = jest.fn()
    const props = {
      history: {push},
    };
    const wrapper = shallow(<LoginPage {...props} />);

    wrapper.setProps({
      token: '123',
      user: 'wwwww',
      errors: '',
      isSuccessful: true,
      message:'message'
    });
    expect(props.history.push).toHaveBeenCalled();
  });

  it('should not reload if there is no token received', () => {
    const props = {
      token: '',
    };
    global.setTimeout = jest.fn();

    const wrapper = shallow(<LoginPage {...props} />);
    wrapper.instance().componentWillReceiveProps({});
    expect(global.setTimeout).not.toHaveBeenCalled();
  });

//   it('should call the login action', () => {
//     const props = { loginAction: jest.fn() };
//     const wrapper = shallow(<LoginView {...props} />);

//     const event = {
//       preventDefault: jest.fn(),
//       target: {
//         elements: {
//           email: {
//             value: 'testemail@mail.com',
//           },
//           password: {
//             value: 'Password1',
//           },
//         },
//       },
//     };
//     wrapper.instance().handleSubmit(event);
//     expect(wrapper.instance().props.loginAction).toHaveBeenCalled();
//   });
});