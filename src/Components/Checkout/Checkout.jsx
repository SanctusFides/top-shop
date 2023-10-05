import CheckoutCard from "../CheckoutCard/CheckoutCard";
import Nbar from "../Nbar/Nbar";
import CartCSS from "./Checkout.module.css";

export default function Checkout({
  cart,
  handleDelete,
  increaseQuantity,
  decreaseQuantity,
  orderTotal,
  submitOrder,
}) {
  const cartCopy = [...cart];

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <>
      <Nbar cart={cart} />

      <div className={CartCSS.body}>
        <h1>Checkout</h1>

        {cartCopy.length == 0 && <h3>Your Cart Empty</h3>}

        {cart.length > 0 && (
          <>
            <ul key={Math.random}>
              {cart &&
                cart.map(
                  (
                    { id, title, price, image, quantity }
                  ) => (
                    <li key={id}>
                      <CheckoutCard
                        id={id}
                        title={title}
                        price={price}
                        image={image}
                        quantity={quantity}
                        handleDelete={handleDelete}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                      />
                    </li>
                  )
                )}
            </ul>

            <h3>ORDER TOTAL: {formatter.format(orderTotal)}</h3>
            <button onClick={submitOrder}>Submit Order</button>
          </>
        )}
      </div>
    </>
  );
}
