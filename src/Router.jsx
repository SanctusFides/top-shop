import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Category from "./Components/Category/Category";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/category",
      element: <Category />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
