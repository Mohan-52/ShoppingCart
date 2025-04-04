import React from "react";
import "./index.css";

function CartItem(props) {
  const { details, incremment, decrement } = props;
  const { name, price, quantity = 1, id } = details;
  return (
    <li className="cart-item">
      <div>
        <p className="product-name">{name}</p>
        <p>
          &#8377; {price} X {quantity}= &#8377; {price * quantity}
        </p>
      </div>
      {price === 0 ? (
        <p className="free-para">FREE GIFT</p>
      ) : (
        <div className="quantity-controls">
          <button
            className="minus-btn btn"
            onClick={() => decrement(id, price)}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="plus-btn btn"
            onClick={() => incremment(id, price)}
          >
            +
          </button>
        </div>
      )}
    </li>
  );
}

export default CartItem;
