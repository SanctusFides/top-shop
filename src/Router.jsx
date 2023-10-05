import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./Components/Store/Store";
import Checkout from "./Components/Checkout/Checkout";
import { useState } from "react";

const Router = () => {

  // I AM SETTING STATES IN ROUTER BECAUSE THE CART AND ORDER TOTAL NEED TO BE STORED ON THE HIGHEST LEVEL AND PASSED DOWN
  // I assume this is maybe not the most normal way to handle this, but it sure is efficient and works
  const [cart, setCart] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0)

  
// Function handles taking in an item, checking if it's already in the cart and if so just increase the quantity by 1
  function handleAddToCart(newItem) {

    setOrderTotal(orderTotal + newItem.price)

    const idList = cart.map((item) => item.id);
    if (!idList.includes(newItem.id)) {
      const freshQuantityItem = {
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        image: newItem.image,
        quantity: 1,
      };
      setCart([...cart, freshQuantityItem]);
    } else {
      increaseQuantity(newItem)
    }
  }

  function increaseQuantity(updatingItem) {
    console.log(updatingItem.price);
    setCart(cart.map(item =>{
      if (item.id === updatingItem.id) {
        setOrderTotal(orderTotal + updatingItem.price)
        return {...item, quantity: item.quantity + 1}
      } else {
        return item
      }
    }))
  }

  function decreaseQuantity(updatingItem) {
    setCart(cart.map(item =>{
      if (item.id === updatingItem.id) {
        if (item.quantity === 1) {
          return item;
        } else {
          setOrderTotal(orderTotal - updatingItem.price)
          return {...item, quantity: item.quantity - 1}
        }
      } else {
        return item
      }
    }))
  }

  function handleDelete(deleteItem) {
    console.log(deleteItem);
    setOrderTotal(orderTotal - deleteItem.price)
    setCart(cart.filter((item) => item.id !== deleteItem.id));
  }

  function submitOrder() {
    // CHANGE THIS FROM USING AN ALERT TO A CUSTOM MODAL WITH A RANDOM NUM MADE FOR ORDER ID. Also checkout form?
    alert(`Thank you valued custom, you order has been received`)
    setCart([])
    setOrderTotal(0)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cart={cart} handleAddToCart={handleAddToCart} />,
    },
    {
      path: "/store",
      element: <Store cart={cart} handleAddToCart={handleAddToCart} />,
    },
    {
      path: "/checkout",
      element: (
        <Checkout
          cart={cart}
          handleDelete={handleDelete}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          orderTotal={orderTotal}
          submitOrder={submitOrder}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
