import React from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import BookDetailPage from "./pages/BookDetailPages/BookDetailPage";
import ShoppingCart from "./pages/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import OrderPage from "./pages/OrderPage";
// import { OrderContextProvider } from "./context/OrderContext";
import OrdersList from "./components/Orders/OrdersList";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
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

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
}

export default App;
