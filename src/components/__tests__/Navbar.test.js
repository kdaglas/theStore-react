import React from "react";
import { shallow } from "enzyme";
import { Redirect } from "react-router-dom";
import {NavBarView } from "../../views/NavBarView";

describe("the navigation bar Component", () => {
  it("should shore navigation bar without crushing", () => {
    const component = shallow(<NavBarView />);
    expect(component).toMatchSnapshot();
  });

  it("should log out when clicked", () => {
    const token = localStorage.setItem('token', 'token')
    const props = {}
    const wrapper = shallow(<NavBarView {...props} />);
    wrapper.instance().logOut()
    expect(localStorage.getItem('token')).toBeNull()
   
  });
});
