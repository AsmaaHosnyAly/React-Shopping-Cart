import React from "react";
import "../../css/Cart/Cart.css";

export default function Cart(props) {
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
    </div>
  );
}
