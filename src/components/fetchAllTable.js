import React from "react";

const FetchAll = props => {
  const products = props.products.map(product => {
    return (
      <tr key={product.productid}>
        <td>{product.product_name}</td>
        <td>{product.unit_price}/=</td>
        <td>{product.quantity} Units</td>
        <td>{product.category}</td>
        <td>
          <a href="#modalbox">
            <button
              className="button1"
              onClick={() => props.onProductSelect(product.productid)}
              type="submit"
            >
              View
            </button>
          </a>
        </td>
      </tr>
    );
  });

  const product = props.products.map(product => {
    if (product.productid !== props.selectedId) return;

    return (
      <div key={product.productid}>
        <div className="details">
          <h5>{product.product_name}</h5>
          <h5>{product.unit_price}/= per unit</h5>
          <h5>{product.quantity} units</h5>
          <h5>{product.category}</h5>
          <h5 className="small-title">minimum quantity allowed</h5>
          <h5>1 unit per time</h5>
        </div>
        <a href="edit.html">
          <button className="button1">Edit</button>
        </a>
        <a href="admin.html">
          <button className="button2" type="button">
            Delete
          </button>
        </a>
      </div>
    );
  });

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
            <div id="product" className="mycart">
              {product}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FetchAll;
