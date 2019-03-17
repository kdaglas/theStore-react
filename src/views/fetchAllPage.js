import React, { Component } from "react";
import { connect } from "react-redux";
import FetchAll from "../components/fetchAllTable";
import fetchAllAction from "../actions/fetchAllAction";

export class fetchAllPage extends Component {
  state = {};

  componentWillMount = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.replace("/login");
    }
    this.props.fetchAllAction();
  };
 

  render() {
    return (
      <div>
        <FetchAll products={this.props.products.products} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.fetchAllReducer
  };
};

export default connect(
  mapStateToProps,
  { fetchAllAction }
)(fetchAllPage);
