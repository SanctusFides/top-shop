import CheckoutCardCSS from "./CheckoutCard.module.css";

export default function CheckoutCard({ id, title, price, image, quantity,handleDelete, increaseQuantity, decreaseQuantity,  }) {
  const checkoutItem = {id: id,title: title, price: price, image: image}
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <div className={CheckoutCardCSS.checkoutCard}>
      <img src={image} className={CheckoutCardCSS.checkoutImage} />

      <div className={CheckoutCardCSS.checkoutDetails}>
        <p> {title} </p>
        <p> {formatter.format(price)} </p>
      </div>

      <div className={CheckoutCardCSS.checkoutbtns}>

        <div className="quantity">
          <button onClick={() => decreaseQuantity(checkoutItem)}>-</button>
          <input type="number" value={quantity} readOnly={true} /> 
          <button  onClick={() => increaseQuantity(checkoutItem)}>+</button>
        </div>
        <button onClick={() => handleDelete(checkoutItem)}>Delete</button>
      </div>
    </div>
  );
}
