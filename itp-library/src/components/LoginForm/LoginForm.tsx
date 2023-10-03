import { Link } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";
import CheckBox from "../FormComponents/CheckBox";
import Input from "../FormComponents/Input";
import classes from "../LoginForm/LoginForm.module.css";

const LoginForm = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div
      className={`container ${classes.item}  mt-0 rounded-1 
      ]`}
    >
      <div className="mb-5">
        <div className={`${classes.lora} pt-0`}>Log in</div>{" "}
        <div className="ms-2 ps-1">Use a local account to log in</div>
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
          <div className="form-check ms-3 mb-5">
            <CheckBox label="Remember me?" />
          </div>
          <div>
            <LoginButton value="Log in" onClick={handleSubmit} />
          </div>
          <div className="container">
            <div className="row mb-3 ps-1">
              <Link to="" className="text-dark">
                Forgot your password?
              </Link>
            </div>
            <div className="row ps-1">
              <Link to="" className="text-dark">
                Register as new user
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
