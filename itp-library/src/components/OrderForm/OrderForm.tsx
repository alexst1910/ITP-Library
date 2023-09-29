import classes from "../OrderForm/OrderForm.module.css";
import Input from "../FormComponents/Input";
import Select from "../FormComponents/Select";
import CheckBox from "../FormComponents/CheckBox";
import Radio from "../FormComponents/Radio";
import Date from "../FormComponents/Date";
import TextArea from "../FormComponents/TextArea";
import { useEffect, useState } from "react";
import { ChangeEvent, FormEvent } from "react";
const OrderForm = () => {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });

  const [RadioOption, setRadioOption] = useState("");
  const [RadioOptionError, setRadioOptionError] = useState("");
  const [countryOption, setCountryOption] = useState("");
  const [countrySelectError, setCountrySelectError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validateInputs = (inputValues: any) => {
    let errors = {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
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
    }
    if (inputValues.phone.length < 10) {
      errors.phone = "Phone number must have a length of 10";
    }

    return errors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setInputFields({ ...inputFields, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const HandleRadioOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioOption(e.target.value);
    setRadioOptionError("");
  };
  const CountryOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountryOption(e.target.value);
    setCountrySelectError("");
  };
  const HandleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setDateError("");
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrors(validateInputs(inputFields));
    setSubmitting(true);
    if (RadioOption === "") {
      setRadioOptionError("Please select a payment method");
    }
    if (countryOption === "") {
      setCountrySelectError("Please enter a country");
    }
    if (date === "") {
      setDateError("Please enter the date");
    }
  };
  const finishSubmit = () => {
    console.log(inputFields);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);
  return (
    <div
      className={`container ${classes.item} border border-dark-subtle mt-5 rounded-1`}
    >
      <div className={classes.lora}>Order Details</div>
      <div>
        {" "}
        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="d-flex justify-content-start mt-4 ps-4">
            <label htmlFor="" className="form-label">
              <b>Contact Details</b>
            </label>
          </div>
          <div className="d-flex flex-row">
            <div>
              <Input
                type="text"
                placeholder="First Name"
                width="380px"
                className="form-control mx-4"
                value={inputFields.firstName}
                name="firstName"
                onChange={handleChange}
              />
              <p className="text-danger ms-4">{errors.firstName}</p>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Last Name"
                width="370px"
                className="form-control mx-4"
                value={inputFields.lastName}
                name="lastName"
                onChange={handleChange}
              />
              <p className="text-danger ms-4">{errors.lastName}</p>
            </div>
          </div>
          <div className="d-flex justify-content-start mt-5 ps-4">
            <label htmlFor="" className="form-label">
              <b>Billing Address</b>
            </label>
          </div>
          <div className="row mb-3 mx-4">
            <Select
              placeholder="Country Selection"
              name="select"
              onChange={CountryOptionChange}
            />{" "}
            {countrySelectError && (
              <p className="text-danger">{countrySelectError}</p>
            )}
          </div>

          <div className="row mb-3 mx-4">
            <Input
              type="text"
              placeholder="Address"
              className="form-control"
              width="800px"
              name="address"
              value={inputFields.address}
              onChange={handleChange}
            />
            <p className="text-danger">{errors.address}</p>
          </div>
          <div className="row mb-4 mx-4">
            <Input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              width="800px"
              name="phone"
              value={inputFields.phone}
              onChange={handleChange}
            />
            <p className="text-danger">{errors.phone}</p>
          </div>
          <div className="form-check ms-4 mb-5">
            <CheckBox label="Use address for delivery" />
          </div>
          <div className="d-flex justify-content-start mt-4 ps-4">
            <label htmlFor="" className="form-label">
              <b>Delivery Address</b>
            </label>
          </div>
          <div className="row mb-4 mx-4">
            <Select
              placeholder="Country Selection"
              name="select"
              onChange={CountryOptionChange}
            />{" "}
            {countrySelectError && (
              <p className="text-danger">{countrySelectError}</p>
            )}
          </div>

          <div className="row mb-3 mx-4">
            <Input
              type="text"
              placeholder="Address"
              className="form-control"
              width="800px"
              name="address"
              value={inputFields.address}
              onChange={handleChange}
            />
            <p className="text-danger">{errors.address}</p>
          </div>
          <div className="row mb-5 mx-4">
            <Input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              width="800px"
              name="phone"
              value={inputFields.phone}
              onChange={handleChange}
            />
            <p className="text-danger">{errors.phone}</p>
          </div>
          <div className="d-flex justify-content-start mt-4 mb-3 ps-4">
            <label htmlFor="" className="form-label">
              <b>Payment Type</b>
            </label>
          </div>
          <div className="form-check-inline ms-4 mb-3">
            <Radio
              label="online"
              checked={RadioOption === "online"}
              onChange={HandleRadioOptionChange}
            />
            <Radio
              label="cash"
              checked={RadioOption === "cash"}
              onChange={HandleRadioOptionChange}
            />
            {RadioOptionError && (
              <p className="text-danger">{RadioOptionError}</p>
            )}
          </div>

          <div className="d-flex justify-content-start mt-2 ps-4">
            <label htmlFor="" className="form-label">
              <b>Delivery Date</b>
            </label>
          </div>
          <div className="row mb-5 mx-4">
            <Date placeholder="Delivery Date" onChange={HandleDateChange} />
            {dateError && <p className="text-danger">{dateError}</p>}
          </div>
          <div className="d-flex justify-content-start mt-4 ps-4">
            <label htmlFor="" className="form-label">
              <b>Observations</b>
            </label>
          </div>
          <div className="row mb-5 mx-4">
            <TextArea placeholder="Observations" rows={3} />
          </div>
          <div className="d-flex justify-content-start mt-4 mb-2 ps-4">
            <label htmlFor="" className="form-label">
              <b>Would You Recommend Us?</b>
            </label>
          </div>
          <div className="form-check ms-4 mb-5">
            <CheckBox label="Would you recommend us?" />
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <button
                className="btn border-dark ms-4"
                style={{ width: "250px" }}
              >
                <span className={classes.buttontext}>Cancel Order</span>
              </button>
            </div>
            <div>
              <button
                className="btn btn-dark me-4"
                style={{ width: "250px", fontFamily: "Lora" }}
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OrderForm;
