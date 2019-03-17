import React, { Component } from "react";
import { connect } from "react-redux";
// import FetchOne from "../components/fetchOne";
// import FetchOne from '../components/fetchAllTable';
import fetchOneAction from "../actions/fetchOneAction";

export class fetchOneModal extends Component {
  state = {};

  componentWillMount = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.replace("/login");
    }
    this.props.fetchOneAction();
  };
 

  render() {
    return (
      <div>
        <FetchOne product={this.props.product.product} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.fetchOneReducer
  };
};

export default connect(
  mapStateToProps,
  { fetchOneAction }
)(fetchOneModal);
