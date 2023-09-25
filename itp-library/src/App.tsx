import React from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import BookDetailPage from "./pages/BookDetailPages/BookDetailPage";
import ShoppingCart from "./pages/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
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
