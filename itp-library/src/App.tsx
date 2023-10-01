import React from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import BookDetailPage from "./pages/BookDetailPages/BookDetailPage";
import ShoppingCart from "./pages/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import OrderPage from "./pages/OrderPage";
import { OrderContextProvider } from "./context/OrderContext";
import OrdersList from "./components/Orders/OrdersList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },

      {
        path: "/detail/:id",
        element: <BookDetailPage />,
        //other paths to be added
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/orders",
        element: <OrdersList />,
      },
    ],
  },
]);
function App() {
  return (
    <OrderContextProvider>
      {" "}
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </OrderContextProvider>
  );
}

export default App;
