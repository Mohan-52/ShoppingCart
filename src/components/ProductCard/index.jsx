import React from "react";
import "./index.css";

function ProductCard(props) {
  const { details, addCartItem } = props;
  const { name, price, id } = details;

  return (
    <li className="product">
      <h3 className="prod-name">{name}</h3>
      <p className="product-price"> &#8377; {price}</p>
      <button className="add-btn" onClick={() => addCartItem(id)}>
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;
