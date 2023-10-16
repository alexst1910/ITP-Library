import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../OrderItem/OrderItem.module.css";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import cover from "../../images/book.jpg";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";

const OrderItem = (props: { total: number; amount: number }) => {
  const orderNumber = Math.floor(Math.random() * 1000);
  const {
    setButtonValue,
    inputFields,
    setInputFields,
    RadioOption,
    setRadioOption,
    countryOption,
    setCountryOption,
    date,
    setDate,
  } = useContext(ShoppingCartContext);

  const handleEditOrderDetails = () => {
    setInputFields({ ...inputFields });
    setRadioOption(RadioOption);
    setCountryOption(countryOption);
    setDate(date);
    setButtonValue("Update Order");
  };

  return (
    <div className="row d-flex flex-row justify-content-between">
      <div className="col d-flex flex-row ">
        <div
          className={` ${classes.image} d-none d-md-block`}
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className="ps-5">
          <h6 className={classes.lora}>Order #{orderNumber}</h6>
          <p className="fs-5">
            Items: <b>{props.amount}</b>
          </p>
          <p className="fs-5">
            Delivery Status: <b>In Progress</b>
          </p>
        </div>
      </div>
      <div className="col d-flex  justify-content-end">
        <div>
          <h3 className={`${classes.gold} ps-5`}>${props.total}</h3>

          <Link to="/order">
            <button
              type="button"
              className={`btn border-0 ${classes.button} ps-3`}
              onClick={handleEditOrderDetails}
            >
              <p className="fs-5">
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ color: "#000000", paddingRight: "10px" }}
                />
                Edit order details
              </p>
            </button>
          </Link>
        </div>
      </div>
      <hr className="mt-4"></hr>
    </div>
  );
};

export default OrderItem;
