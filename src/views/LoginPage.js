import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/loginForm";
import loginAction from "../actions/loginAction";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendant_name: "",
      password: "",
      message: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
        this.setState({
          message: nextProps.message
        });
        nextProps.history.push("/");
      }
    else if (nextProps.error) {
      this.setState({
        message: nextProps.error
      });
    }
  }

  onChange(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.loginAction(this.state);
  }

  render() {
    return (
      <div>
        <Login
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          message={this.state.message}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  successState: state.authReducer.isSuccessful,
  error: state.authReducer.error,
  message: state.authReducer.message,
  token: state.authReducer.token
});

export default connect(
  mapStateToProps,
  { loginAction }
)(LoginPage);
