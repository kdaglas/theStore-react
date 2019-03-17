import React, { Component } from "react";
import { connect } from "react-redux";
import FetchAll from "../components/fetchAllTable";
import fetchAllAction from "../actions/fetchAllAction";

export class fetchAllPage extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      productid:-1
    };
  }



  componentWillMount = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.replace("/login");
    }
    this.props.fetchAllAction();
  };
 
  onProductSelect=(id)=>{
   this.setState({productid:id});
  }

  render() {
    return (
      <div>
        <FetchAll onProductSelect={this.onProductSelect} selectedId={this.state.productid}  products={this.props.products.products} />
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
