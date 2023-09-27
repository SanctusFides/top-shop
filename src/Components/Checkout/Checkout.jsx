import CheckoutCard from "../CheckoutCard/CheckoutCard";
import Nbar from "../Nbar/Nbar";
import CartCSS from "./Checkout.module.css";
export default function Checkout({ cart }) {

  const cartCopy = [...cart]
  let orderTotal = 0;
  if (cartCopy.length > 0) {
    cartCopy.forEach((item) => orderTotal += item.price)
  }

  console.log(cartCopy);

  return (
    <>
      <Nbar cart={cart} />

      <div className={CartCSS.body}>
        <h1>Checkout</h1>

        { cartCopy.length == 0 &&
          <h3>Your Cart Empty</h3>
        }
        
        { cart.length > 0 &&
        <>
          <ul>
            {cart &&
              cart.map(({ id, title, price, image }) => (
                <li key={id} >
                  <CheckoutCard title={title} price={price} image={image}/>   
                </li>
              ))}
          </ul>

          <h3>ORDER TOTAL: {orderTotal}</h3>
        </>
        }
      </div>
    </>
  );
}