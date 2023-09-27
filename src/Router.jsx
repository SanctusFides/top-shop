import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./Components/Store/Store";
import Checkout from "./Components/Checkout/Checkout";
import { useState } from "react";

const Router = () => {
  const [cart, setCart] = useState([]);

  function handleAddToCart(newItem) {
    setCart([...cart, newItem]);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cart={cart} handleAddToCart={handleAddToCart} />,
    },
    {
      path: "/store",
      element: <Store  cart={cart} handleAddToCart={handleAddToCart} />,
    },
    {
      path:"/checkout",
      element: <Checkout cart={cart} />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
