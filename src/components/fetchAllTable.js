import React from "react";

const FetchAll = props => {
    const products= props.products.map(product=>{
        return(
          <tr key={product.productid}>
            <td>{product.product_name}</td>
            <td>{product.unit_price}/=</td>
            <td>{product.quantity} Units</td>
            <td>{product.category}</td>
            <td><a href="#modalbox"><button className="button1" type="submit">View</button></a></td>
          </tr>
        )
    })
  return (
    <section className="main_container">
      <div className="">
        <h1 className="activity">All products.</h1>
        <div className="table">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Product Details</th>
              </tr>
            </thead>
            <tbody>{products}</tbody>
          </table>
          <p className="error-message" id="errormsg" />
        </div>

        <div id="modalbox">
          <div>
            <div className="product-head">
              <h3>Product details</h3>
              <a href="#close">
                <button>Close modal</button>
              </a>
            </div>
            <div id="product" className="mycart" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FetchAll;
