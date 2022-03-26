import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handelChange = (e) => {
    console.log(e.target.value);
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>There is {props.cartItems.length} products in cart</p>
        )}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item">
            <img src={item.ImgUrl} alt={item.title} />
            <div className="cart-info">
              <div>
                <p> Title {item.title}</p>
                <p>qty:{item.qty}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
            <button
              className="btn-remove"
              onClick={() => props.removeFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            Total Price :
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}> Select product</button>
        </div>
      )}
      <CheckoutForm
        submitOrder={submitOrder}
        handelChange={handelChange}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
  );
}
