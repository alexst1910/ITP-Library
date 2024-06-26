import LoginButton from "../Buttons/LoginButton";
import Input from "../FormComponents/Input";
import classes from "../LoginForm/LoginForm.module.css";
import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import React from "react";
const RegisterForm = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    passwordLength: "",
    emailFormat: "",
    passwordMatch: "",
    passwordFormat: "",
  });

  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const { handleAuth } = useContext(ShoppingCartContext);

  const validateInputs = (inputValues: any) => {
    let errors = {
      email: "",
      password: "",
      confirmPassword: "",
      passwordLength: "",
      emailFormat: "",
      passwordMatch: "",
      passwordFormat: "",
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
    if (inputValues.confirmPassword.trim() === "") {
      errors.confirmPassword = "Please confirm password";
    }
    if (inputValues.confirmPassword !== inputValues.password) {
      errors.passwordMatch = "Passwords don't match";
    }
    if (
      !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(
        inputValues.password
      )
    ) {
      errors.passwordFormat =
        "Password must contain numbers, special characters and capital letters";
    }

    return errors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
    setErrors({ ...errors, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(validateInputs(inputFields));

    const passwordValidationErrors = validateInputs(inputFields);

    if (
      passwordValidationErrors.passwordFormat ||
      passwordValidationErrors.passwordLength ||
      passwordValidationErrors.passwordMatch
    ) {
      setErrors(passwordValidationErrors);
    } else
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          inputFields.email,
          inputFields.password
        );
        navigate("/");
        handleAuth();
      } catch (error: any) {
        if (error.code === "auth/email-already-in-use") {
          setRegisterError("User already exists");
        }
      }
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
            ) : !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(
                inputFields.password
              ) ? (
              <p className="text-danger ms-3">{errors.passwordFormat}</p>
            ) : (
              ""
            )}
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
              name="confirmPassword"
              onChange={handleChange}
            />
            {inputFields.confirmPassword.trim() === "" ? (
              <p className="text-danger ms-3">{errors.confirmPassword}</p>
            ) : inputFields.confirmPassword !== inputFields.password ? (
              <p className="text-danger ms-3">{errors.passwordMatch}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <Link to=" ">
              {" "}
              <LoginButton value="Register" onClick={handleSubmit} />
            </Link>

            {registerError && (
              <p className="text-danger ms-4">{registerError}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
