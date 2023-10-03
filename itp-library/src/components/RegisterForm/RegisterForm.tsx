import { Link } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";
import Input from "../FormComponents/Input";
import classes from "../LoginForm/LoginForm.module.css";
import { FormEvent } from "react";

const RegisterForm = () => {
  const handleChange = () => {};
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div
      className={`container ${classes.item}  mt-0 rounded-1 
      ]`}
    >
      <div className="mb-5">
        <div className={`${classes.lora} pt-0`}>Register</div>{" "}
        <div className="ms-2 ps-1">Create a new account</div>
      </div>
      <div>
        <form className="needs-validation" noValidate>
          <div className="row mb-4">
            <label htmlFor="" className="form-label ps-4 fw-bold">
              Email
            </label>
            <Input
              type="text"
              placeholder="Email"
              width="550px"
              className="form-control mx-4"
              value="alex@alex"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="row mb-4">
            <label htmlFor="" className="form-label ps-4 fw-bold">
              Password
            </label>
            <Input
              type="password"
              placeholder="Password"
              width="550px"
              className="form-control mx-4"
              value="alex@alex"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="row mb-5">
            <label htmlFor="" className="form-label ps-4 fw-bold">
              Confirm Password
            </label>
            <Input
              type="password"
              placeholder="Confirm Password"
              width="550px"
              className="form-control mx-4"
              value="alex@alex"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <LoginButton value="Register" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
