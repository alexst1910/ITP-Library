import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../OrderItem/OrderItem.module.css";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import cover from "../../images/book.jpg";
const OrderItem = () => {
  return (
    <div className="row d-flex flex-row justify-content-between">
      <div className="col d-flex flex-row ">
        <div
          className={` ${classes.image} d-none d-md-block`}
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className="ps-5">
          <h6 className={classes.lora}>Order #5454</h6>
          <p className="fs-5">
            Items: <b>2</b>
          </p>
          <p className="fs-5">
            Delivery Status: <b>In Progress</b>
          </p>
        </div>
      </div>
      <div className="col d-flex  justify-content-end">
        <div>
          <h3 className={`${classes.gold} ps-5`}>$90</h3>

          <button
            type="button"
            className={`btn border-0 ${classes.button} p-0`}
          >
            <p className="fs-5">
              <FontAwesomeIcon
                icon={faPen}
                style={{ color: "#000000", paddingRight: "10px" }}
              />
              Edit order details
            </p>
          </button>
        </div>
      </div>
      <hr className="mt-4"></hr>
    </div>
  );
};

export default OrderItem;
