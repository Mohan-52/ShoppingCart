import React, { useState } from "react";
import ProductCard from "../ProductCard";
import CartItem from "../CartItem";
import "./index.css";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };

function Cart() {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubtotal] = useState(0);

  const emptyCartView = () => (
    <div className="empty-con">
      <h3>Your Cart is Empty</h3>
      <p>Add some products to see them here.</p>
    </div>
  );

  const incremment = (id, price) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );

    setSubtotal((prev) => prev + price);
  };

  const decrement = (id, price) => {
    const product = cart.find((product) => product.id === id);
    setSubtotal((prev) => prev - price);
    if (product.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    } else {
      const updateCart = cart.filter((product) => product.id !== id);
      setCart(updateCart);
    }
  };

  const addCartItem = (id) => {
    console.log(cart);
    const isExists = cart.find((product) => product.id === id);
    if (isExists) {
      setSubtotal((prev) => prev + isExists.price);
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      const product = PRODUCTS.find((product) => product.id === id);
      if (product) {
        setSubtotal((prev) => prev + product.price);
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      }
    }
  };

  const getProgressBar = () => (
    <div className="progress-con">
      <p>Add &#8377;{1000 - subTotal} more to get a FREE Wireless Mouse</p>
      <progress value={subTotal} max={1000} className="progress-bar" />
    </div>
  );

  const getCartItem = () => (
    <ul className="cart-item-ul">
      {cart.map((product) => (
        <CartItem
          details={product}
          key={product.id}
          incremment={incremment}
          decrement={decrement}
        />
      ))}

      {subTotal >= 1000 && <CartItem details={FREE_GIFT} key={FREE_GIFT.id} />}
    </ul>
  );
  return (
    <div className="bg-conatainer">
      <h1 className="heading">Shopping Cart</h1>
      <div className="products-conatiner">
        <h2 className="product-h2">Products</h2>
        <ul className="product-ul">
          {PRODUCTS.map((eachProduct) => (
            <ProductCard
              details={eachProduct}
              key={eachProduct.id}
              addCartItem={addCartItem}
            />
          ))}
        </ul>
        <h2>Cart Summary</h2>
        <div className="summary-con">
          <div className="sub-total-con">
            <h3>Subtotal:</h3>
            <p> &#8377; {subTotal}</p>
          </div>
          <hr />
          {subTotal < 1000 ? getProgressBar() : <p>You got Wireles Mouse!</p>}
        </div>

        {cart.length === 0 ? emptyCartView() : getCartItem()}
      </div>
    </div>
  );
}

export default Cart;
