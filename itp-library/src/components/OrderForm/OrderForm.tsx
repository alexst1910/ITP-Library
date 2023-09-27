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
            </label>
          </div>
          <div className="row">
            <div className="col col-lg-6 ">
              <input
                type="text"
                id="inputFirstName"
                className="form-control mx-4"
                placeholder="First Name"
                style={{ width: "350px" }}
              ></input>
            </div>
            <div className="col col-lg-6 ">
              <input
                type="text"
                id="inputLastName"
                className="form-control me-4"
                placeholder="Last Name"
                style={{ width: "350px" }}
              ></input>
            </div>
          </div>
          <div className="d-flex justify-content-start mt-5 ps-4">
            <label htmlFor="" className="form-label">
              <b>Billing Address</b>
            </label>
          </div>
          <div className="row mb-3 mx-4">
            <select
              className={`form-select `}
              aria-label="Default select example"
            >
              <option selected>Country Selection</option>
              <option value="1">Romania</option>
              <option value="2">United Kingdom</option>
              <option value="3">United States</option>
            </select>
          </div>
          <div className="row mb-3 mx-4">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="row mb-4 mx-4">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-check ms-4 mb-5">
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
          <div className="d-flex justify-content-start mt-4 ps-4">
            <label htmlFor="" className="form-label">
              <b>Delivery Address</b>
            </label>
          </div>
          <div className="row mb-3 mx-4">
            <select className="form-select" aria-label="Default select example">
              <option selected>Country Selection</option>
              <option value="1">Romania</option>
              <option value="2">United Kingdom</option>
              <option value="3">United States</option>
            </select>
          </div>
          <div className="row mb-3 mx-4">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="row mb-5 mx-4">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="d-flex justify-content-start mt-4 mb-3 ps-4">
            <label htmlFor="" className="form-label">
              <b>Payment Type</b>
            </label>
          </div>
          <div className="form-check-inline ms-4 mb-5">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label ms-3 me-4"
              htmlFor="flexRadioDefault1"
            >
              Online
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              className="form-check-label ms-3"
              htmlFor="flexRadioDefault2"
            >
              Cash
            </label>
          </div>
          <div className="d-flex justify-content-start mt-2 ps-4">
            <label htmlFor="" className="form-label">
              <b>Delivery Date</b>
            </label>
          </div>
          <div className="row mb-5 mx-4">
            <input
              type="date"
              className="form-control"
              placeholder="Delivery Date"
            />
          </div>
          <div className="d-flex justify-content-start mt-4 ps-4">
            <label htmlFor="" className="form-label">
              <b>Observations</b>
            </label>
          </div>
          <div className="row mb-5 mx-4">
            <textarea
              className="form-control"
              placeholder="Observations"
              rows={3}
            />
          </div>
          <div className="d-flex justify-content-start mt-4 mb-2 ps-4">
            <label htmlFor="" className="form-label">
              <b>Would You Recommend Us?</b>
            </label>
          </div>
          <div className="form-check ms-4 mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Would you recommend us?
            </label>
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
