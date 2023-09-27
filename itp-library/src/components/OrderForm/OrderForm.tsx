import classes from "../OrderForm/OrderForm.module.css";

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
            </label>{" "}
          </div>
          <div className="row mb-5">
            <div className="col">
              <input
                type="text"
                id="inputFirstName"
                className="form-control ms-4"
                placeholder="First Name"
                style={{ width: "350px" }}
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                id="inputLastName"
                className="form-control"
                placeholder="Last Name"
                style={{ width: "350px" }}
              ></input>
            </div>
          </div>
          <div className="d-flex justify-content-start mt-4 ps-4">
            <label htmlFor="" className="form-label">
              <b>Billing Address</b>
            </label>{" "}
          </div>
          <div className={`row mb-3 ${classes.inputs}`}>
            <select className="form-select" aria-label="Default select example">
              <option selected>Country Selection</option>
              <option value="1">Romania</option>
              <option value="2">United Kingdom</option>
              <option value="3">United States</option>
            </select>
          </div>
          <div className={`row mb-3 ${classes.inputs}`}>
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className={`row mb-4 ${classes.inputs}`}>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>

          <div className="form-check ms-4">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Use address for delivery
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OrderForm;
