import React from "react";
import CheckoutCardCSS from "./CheckoutCard.module.css";

export default function CheckoutCard({ title, price, image }) {
  return (
    <div className={CheckoutCardCSS.checkoutCard}>
      <img src={image} className={CheckoutCardCSS.checkoutImage} />

      <div className={CheckoutCardCSS.checkoutDetails}>
        <p> {title} </p>
        <p> ${price} </p>
      </div>

      <div className={CheckoutCardCSS.checkoutbtns}>
        <button>-</button>
        <input type="number" />
        <button>+</button>
      </div>
    </div>
  );
}
