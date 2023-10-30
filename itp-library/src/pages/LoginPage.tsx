import LoginForm from "../components/LoginForm/LoginForm";
import classes from "../pages/LoginPage.module.css";
import cover from "../images/library.jpg";
import React from "react";
const LoginPage = () => {
  return (
    <div className={`container ${classes.item}`}>
      <div className="row">
        <div className="col mt-2">
          {" "}
          <div
            className={`${classes.image} d-none d-lg-block`}
            style={{ backgroundImage: `url(${cover})` }}
          ></div>
        </div>
        <div className="col">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
