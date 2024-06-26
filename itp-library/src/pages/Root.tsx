import Footer from "../components/Footer/Footer";
import MainNavigation from "../components/Navigation/MainNavigation";
import { Outlet } from "react-router-dom";
import React from "react";
const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
