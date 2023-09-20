import React from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import BookDetailPage from "./pages/BookDetailPage";

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
        path: "/detail",
        element: <BookDetailPage />,
        //other paths to be added
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
