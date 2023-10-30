import { useNavigate } from "react-router-dom";
import React from "react";
const Auth = (Component: React.FC) => {
  const AuthRoute = () => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("token");
    if (isAuth) {
      return <Component />;
    } else {
      navigate("/");
      return null;
    }
  };
  return AuthRoute;
};

export default Auth;
