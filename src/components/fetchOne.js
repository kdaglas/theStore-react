import React from "react";

const FetchOne = props => {
  const product = props.product.map(product => {
    return (
      <div>
        <div class="details">
          <h4>${data.Product.product_name}</h4>
          <h4>${data.Product.unit_price}/= per unit</h4>
          <h4>${data.Product.quantity} units</h4>
          <h4>${data.Product.category}</h4>
          <h3 class="small-title">minimum quantity allowed</h3>
          <h4>1 unit per time</h4>
        </div>
        <a href="edit.html">
          <button class="button1">Edit</button>
        </a>
        <a href="admin.html">
          <button
            class="button2"
            type="button"
            onclick="deleteItem(${data.Product.productid})"
          >
            Delete
          </button>
        </a>
      </div>
    );
  });

  return (
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
  );
};

export default FetchOne;
