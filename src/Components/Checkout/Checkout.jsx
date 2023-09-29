import CheckoutCard from "../CheckoutCard/CheckoutCard";
import Nbar from "../Nbar/Nbar";
import CartCSS from "./Checkout.module.css";

export default function Checkout({
  cart,
  handleDelete,
  increaseQuantity,
  decreaseQuantity,
}) {
  const cartCopy = [...cart];
  let orderTotal = 0;
  if (cartCopy.length > 0) {
    cartCopy.forEach((item) => (orderTotal += item.price));
  }

  console.log(cartCopy);

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
                    { id, title, price, image, quantity } // NEED TO ADD QUANTITY FIELD TO THIS AND PASS IT THROUGH TO CHECKOUT CARD
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

            <h3>ORDER TOTAL: {orderTotal}</h3>
          </>
        )}
      </div>
    </>
  );
}
