import React from "react";
import "../../css/CheckoutForm/CheckoutForm.css";
import Input from "../Input/Input";

export default function CheckoutForm(props) {
  return (
    <>
      {/*checkout form  */}
      {props.showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <form onSubmit={props.submitOrder}>
            <Input
              label="Name"
              type="text"
              name="name"
              onChange={props.handelChange}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              onChange={props.handelChange}
            />
            <div>
              <button type="submit">Checkout</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
