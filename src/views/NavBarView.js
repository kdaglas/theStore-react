import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
// import Login from "../components/loginForm";
// import loginAction from "../actions/loginAction";

export class NavBarView extends Component {
  state = {
    isAuthenticated: false
  };

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({
        isAuthenticated: true
      });
    }
  }

  logOut = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  render() {
    return (
      <Navbar
        isAuthenticated={this.state.isAuthenticated}
        logOut={this.logOut}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.Auth
  };
}

export default connect(
  mapStateToProps,
  {}
)(NavBarView);
