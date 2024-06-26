import classes from "../OrderForm/OrderForm.module.css";

import Select from "../FormComponents/Select";
import CheckBox from "../FormComponents/CheckBox";
import Radio from "../FormComponents/Radio";
import Date from "../FormComponents/Date";
import TextArea from "../FormComponents/TextArea";
import { useState, useContext } from "react";
import { ChangeEvent, FormEvent } from "react";
import Button from "../Buttons/Button";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import Modal from "../Modals/Modal";
import React from "react";

const OrderForm: React.FC = () => {
  const {
    addToOrder,
    inputFields,
    errors,
    handleChange,
    setErrors,
    isAuth,
    setButtonValue,
    RadioOption,
    setRadioOption,
    countryOption,
    setCountryOption,
    date,
    dateError,
    HandleDateChange,
    setDateError,
  } = useContext(ShoppingCartContext);

  const isSelectedRadio = (value: string): boolean => RadioOption === value;

  const [RadioOptionError, setRadioOptionError] = useState("");
  const [countrySelectError, setCountrySelectError] = useState("");

  // const [submitting, setSubmitting] = useState(false);

  const { buttonValue } = useContext(ShoppingCartContext);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setButtonValue("Place Order");
  };

  const validateInputs = (inputValues: any) => {
    let errors = {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      phoneLength: "",
      phoneFormat: "",
    };
    if (inputValues.firstName.trim() === "") {
      errors.firstName = "Please enter your first name";
    }
    if (inputValues.lastName.trim() === "") {
      errors.lastName = "Please enter your last name";
    }
    if (inputValues.address.length === 0) {
      errors.address = "Please provide an address";
    }
    if (inputValues.phone.length === 0) {
      errors.phone = "Please provide a phone number";
      // errors.phoneLength = "";
    }
    if (
      inputValues.phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) &&
      !/^\d+$/.test(inputValues.phone)
    ) {
      errors.phoneFormat = "Provide a valid phone format";
    }
    if (inputValues.phone.length < 10) {
      errors.phoneLength = "Phone number must have a length of 10";
    }

    return errors;
  };

  const HandleRadioOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioOption(e.currentTarget.value);

    setRadioOptionError("");
  };

  const CountryOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountryOption(e.target.value);
    setCountrySelectError("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrors(validateInputs(inputFields));

    if (RadioOption === "") {
      setRadioOptionError("Please select a payment method");
    }
    if (countryOption === "") {
      setCountrySelectError("Please enter a country");
    }
    if (date === "") {
      setDateError("Please enter the date");
    }

    addToOrder();
  };

  return (
    <>
      <div
        className={`container ${classes.item} border border-dark-subtle mt-5 rounded-1`}
      >
        {" "}
        <Modal show={showModal} onClose={handleCloseModal} />
        <div className={classes.lora}>Order Details</div>
        <div>
          {" "}
          <form className="needs-validation" noValidate>
            <div className="d-flex justify-content-start mt-4 ps-4">
              <label htmlFor="" className="form-label">
                <b>Contact Details</b>
              </label>
            </div>
            <div className="row">
              <div className="col col-sm-12 col-lg-6">
                <input
                  type="text"
                  placeholder="First Name"
                  // width="360px"
                  style={{ width: "360px" }}
                  className="form-control mx-4"
                  value={inputFields.firstName}
                  name="firstName"
                  onChange={handleChange}
                />

                <p className="text-danger ms-4">{errors.firstName}</p>
              </div>
              <div className="col col-sm-12 col-lg-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  // width="360px"
                  style={{ width: "360px" }}
                  className="form-control ms-4 mx-2"
                  value={inputFields.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
                <p className="text-danger ms-4">{errors.lastName}</p>
              </div>
            </div>
            <div className="d-flex justify-content-start mt-2 ps-4">
              <label htmlFor="" className="form-label">
                <b>Billing Address</b>
              </label>
            </div>
            <div className="row mb-3 mx-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="country select"
                onChange={CountryOptionChange}
              >
                <option defaultValue="Country Selection">
                  Country Selection
                </option>
                <option value="1">Romania</option>
                <option value="2">United Kingdom</option>
                <option value="3">United States</option>
              </select>
              {countrySelectError && (
                <p className="text-danger mb-0">{countrySelectError}</p>
              )}
            </div>

            <div className="row mb-1 mx-4">
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                // width="800px"
                style={{ width: "800px" }}
                name="address"
                value={inputFields.address}
                onChange={handleChange}
              />
              <p className="text-danger">{errors.address}</p>
            </div>
            <div className="row mb-2 mx-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-control"
                // width="800px"
                style={{ width: "800px" }}
                name="phone"
                value={inputFields.phone}
                onChange={handleChange}
              />
              <p className="text-danger">
                {inputFields.phone.length === 0
                  ? errors.phone
                  : inputFields.phone.length < 10
                  ? errors.phoneLength
                  : inputFields.phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) &&
                    !/^\d+$/.test(inputFields.phone)
                  ? errors.phoneFormat
                  : null}
              </p>
            </div>
            <div className="form-check ms-4 mb-3">
              <CheckBox label="Use address for delivery" />
            </div>
            <div className="d-flex justify-content-start mt-4 ps-4">
              <label htmlFor="" className="form-label">
                <b>Delivery Address</b>
              </label>
            </div>
            <div className="row mb-3 mx-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="country select"
                onChange={CountryOptionChange}
              >
                <option defaultValue="Country Selection">
                  Country Selection
                </option>
                <option value="1">Romania</option>
                <option value="2">United Kingdom</option>
                <option value="3">United States</option>
              </select>
              {countrySelectError && (
                <p className="text-danger">{countrySelectError}</p>
              )}
            </div>

            <div className="row mb-1 mx-4">
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                // width="800px"
                style={{ width: "800px" }}
                name="address"
                value={inputFields.address}
                onChange={handleChange}
              />
              <p className="text-danger">{errors.address}</p>
            </div>
            <div className="row mb-1 mx-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-control"
                // width="800px"
                style={{ width: "800px" }}
                name="phone"
                value={inputFields.phone}
                onChange={handleChange}
              />
              <p className="text-danger">
                {inputFields.phone.length === 0
                  ? errors.phone
                  : inputFields.phone.length < 10
                  ? errors.phoneLength
                  : inputFields.phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) &&
                    !/^\d+$/.test(inputFields.phone)
                  ? errors.phoneFormat
                  : null}
              </p>
            </div>
            <div className="d-flex justify-content-start mb-2 ps-4">
              <label htmlFor="" className="form-label">
                <b>Payment Type</b>
              </label>
            </div>
            <div className="form-check-inline ms-4 mb-3">
              {/* <Radio onChange={HandleRadioOptionChange} /> */}
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioDefault1"
                value="online"
                name="payment"
                onChange={HandleRadioOptionChange}
                checked={isSelectedRadio("online")}
              />
              <label
                className="form-check-label ms-3 me-4"
                htmlFor="flexRadioDefault1"
              >
                online
              </label>

              <input
                className="form-check-input"
                type="radio"
                id="flexRadioDefault2"
                value="cash"
                name="payment"
                checked={isSelectedRadio("cash")}
                onChange={HandleRadioOptionChange}
              />
              <label
                className="form-check-label ms-3 me-4"
                htmlFor="flexRadioDefault1"
              >
                cash
              </label>
              {RadioOptionError && (
                <p className="text-danger">{RadioOptionError}</p>
              )}
            </div>

            <div className="d-flex justify-content-start mt-2 ps-4">
              <label htmlFor="" className="form-label">
                <b>Delivery Date</b>
              </label>
            </div>
            <div className="row mb-3 mx-4">
              {/* <Date placeholder="Delivery Date" onChange={HandleDateChange} /> */}
              <input
                type="date"
                className="form-control"
                placeholder="Delivery Date"
                onChange={HandleDateChange}
              />
              {dateError && <p className="text-danger">{dateError}</p>}
            </div>
            <div className="d-flex justify-content-start mt-4 ps-4">
              <label htmlFor="" className="form-label">
                <b>Observations</b>
              </label>
            </div>
            <div className="row mb-3 mx-4">
              <TextArea placeholder="Observations" rows={3} />
            </div>
            <div className="d-flex justify-content-start mt-1 mb-2 ps-4">
              <label htmlFor="" className="form-label">
                <b>Would You Recommend Us?</b>
              </label>
            </div>
            <div className="form-check ms-4 mb-5">
              <CheckBox label="Would you recommend us?" />
            </div>
            <div className="d-flex flex-row justify-content-between">
              <div>
                <Link to="/cart">
                  <button
                    className="btn border-dark ms-4 mb-5"
                    style={{ width: "250px" }}
                    onClick={() => setButtonValue("Place Order")}
                  >
                    <span className={classes.buttontext}>Cancel Order</span>
                  </button>
                </Link>
              </div>
              <div>
                {buttonValue === "Place Order" ? (
                  isAuth && <Button onClick={handleSubmit} />
                ) : buttonValue === "Update Order" ? (
                  <Button onClick={handleShowModal} />
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default OrderForm;
