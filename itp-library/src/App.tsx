import React from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import BestBookDetailPage from "./pages/BookDetailPages/BestBookDetailPage";
import RecentBookDetailPage from "./pages/BookDetailPages/RecentBookDetailPage";

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
        path: "/detail/best/:id",
        element: <BestBookDetailPage />,
        //other paths to be added
      },
      {
        path: "/detail/recent/:id",
        element: <RecentBookDetailPage />,
        //other paths to be added
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
