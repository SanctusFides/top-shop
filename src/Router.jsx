import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./Components/Store/Store";
import Checkout from "./Components/Checkout/Checkout";
import { useState } from "react";

const Router = () => {
  const [cart, setCart] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0)

NEED TO FIND A WAY TO USE ORDER TOTAL FOR THE CART. I KNOW YOU SHOULDNT TRACK VALUES YOU CAN GET WITH MATH, BUT ITS GETTING MESSY
SO I JUST NEED TO DO THIS AND PLUG IT INTO THE HANDLE METHODS
!!!!
!!!!



// Function handles taking in an item, checking if it's already in the cart and if so just increase the quantity by 1
  function handleAddToCart(newItem) {
    const idList = cart.map((item) => item.id);

    if (!idList.includes(newItem.id)) {
      console.log("new item");
      const freshQuantityItem = {
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        image: newItem.image,
        quantity: 1,
      };
      setCart([...cart, freshQuantityItem]);
    } else {
      console.log("quantity++");
    }
  }

  function increaseQuantity(updatingItem) {
    setCart(cart.map(item =>{
      if (item.id === updatingItem.id) {
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
          return {...item, quantity: item.quantity - 1}
        }
      } else {
        return item
      }
    }))
  }

  function handleDelete(deleteItem) {
    console.log(deleteItem);
    setCart(cart.filter((item) => item.id !== deleteItem.id));
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
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
