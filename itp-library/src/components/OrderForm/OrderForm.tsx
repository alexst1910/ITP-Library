import classes from "../OrderForm/OrderForm.module.css";
import Input from "../FormComponents/Input";
import Select from "../FormComponents/Select";
import CheckBox from "../FormComponents/CheckBox";
import Radio from "../FormComponents/Radio";
import Date from "../FormComponents/Date";
import TextArea from "../FormComponents/TextArea";
const OrderForm = () => {
  return (
    <div
      className={`container ${classes.item} border border-dark-subtle mt-5 rounded-1`}
    >
      <div className={classes.lora}>Order Details</div>
      <div>
        <form>
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
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Last Name"
                width="370px"
                className="form-control mx-4"
              />
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
              type="tel"
              placeholder="Phone Number"
              className="form-control"
              width="800px"
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
        </form>
        <div className="d-flex flex-row justify-content-between">
          <div>
            <button className="btn border-dark ms-4" style={{ width: "250px" }}>
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
      </div>
    </div>
  );
};
export default OrderForm;
