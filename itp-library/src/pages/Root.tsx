import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
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
