import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";
import CheckBox from "../FormComponents/CheckBox";
import Input from "../FormComponents/Input";
import classes from "../LoginForm/LoginForm.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginForm = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordLength: "",
    emailFormat: "",
  });

  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const validateInputs = (inputValues: any) => {
    let errors = {
      email: "",
      password: "",
      passwordLength: "",
      emailFormat: "",
    };
    if (inputValues.email.trim() === "") {
      errors.email = "Please enter your email address";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email)) {
      errors.emailFormat = "Enter a valid email format";
    }
    if (inputValues.password.trim() === "") {
      errors.password = "Please enter password";
    }
    if (inputValues.password.length < 8) {
      errors.passwordLength = "Password must have at least 8 characters";
    }

    return errors;
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  // const login = async () => {

  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(validateInputs(inputFields));

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        inputFields.email,
        inputFields.password
      );
      setAuthenticated(true);
      console.log(user);
      navigate("/");
    } catch (error: any) {
      if (error.code === "auth/invalid-login-credentials") {
        setLoginError("User doesn't exist. Please register");
      }
    }
  };
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
            {inputFields.email.trim() === "" ? (
              <p className="text-danger ms-3">{errors.email}</p>
            ) : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                inputFields.email
              ) ? (
              <p className="text-danger ms-3">{errors.emailFormat}</p>
            ) : (
              ""
            )}
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
            {inputFields.password.trim() === "" ? (
              <p className="text-danger ms-3">{errors.password}</p>
            ) : inputFields.password.length < 8 ? (
              <p className="text-danger ms-3">{errors.passwordLength}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-check ms-3 mb-5">
            <CheckBox label="Remember me?" />
          </div>{" "}
          <div>
            <Link to=" ">
              {" "}
              <LoginButton value="Log in" onClick={handleSubmit} />{" "}
            </Link>
          </div>{" "}
          {loginError && <p className="text-danger ms-3">{loginError}</p>}
          <div className="container">
            <div className="row mb-3 ps-1">
              <NavLink to="/" className="text-dark">
                Forgot your password?
              </NavLink>
            </div>
            <div className="row ps-1">
              <Link to="/register" className="text-dark">
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
