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
    date: "",
    select: "",
    payment: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    date: "",
    select: "",
    payment: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const validateInputs = (inputValues: any) => {
    let errors = {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      date: "",
      select: "",
      payment: "",
    };
    if (inputValues.firstName.length === 0) {
      errors.firstName = "Please enter your first name";
    }
    if (inputValues.lastName.length === 0) {
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
    if (!inputValues.date) {
      errors.date = "Please enter a date";
    }
    if (!inputValues.select) {
      errors.select = "Please select a country";
    }
    if (!inputFields.payment) {
      errors.payment = "Please enter payment type";
    }
    return errors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrors(validateInputs(inputFields));
    setSubmitting(true);
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
                onChange={handleChange}
              />
              {/* <p className="text-danger ms-4">{errors.firstName}</p> */}
              {errors.firstName ? (
                <p className="text-danger ms-4">Please enter first name</p>
              ) : null}
            </div>
            <div>
              <Input
                type="text"
                placeholder="Last Name"
                width="370px"
                className="form-control mx-4"
                value={inputFields.lastName}
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
            <Select placeholder="Country Selection" />
          </div>
          <div className="row mb-3 mx-4">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="row mb-4 mx-4">
            <Input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              width="800px"
              value={inputFields.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-check ms-4 mb-5">
            <CheckBox label="Use address for delivery" />
          </div>
          <div className="d-flex justify-content-start mt-4 ps-4">
            <label htmlFor="" className="form-label">
              <b>Delivery Address</b>
            </label>
          </div>
          <div className="row mb-3 mx-4">
            <Select placeholder="Country Selection" />
          </div>
          <div className="row mb-3 mx-4">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="row mb-5 mx-4">
            <Input
              type="tel"
              placeholder="Phone Number"
              className="form-control"
              width="800px"
              value={inputFields.phone}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-start mt-4 mb-3 ps-4">
            <label htmlFor="" className="form-label">
              <b>Payment Type</b>
            </label>
          </div>
          <div className="form-check-inline ms-4 mb-5">
            <Radio label="online" />
            <Radio label="cash" />
          </div>
          <div className="d-flex justify-content-start mt-2 ps-4">
            <label htmlFor="" className="form-label">
              <b>Delivery Date</b>
            </label>
          </div>
          <div className="row mb-5 mx-4">
            <Date placeholder="Delivery Date" />
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
