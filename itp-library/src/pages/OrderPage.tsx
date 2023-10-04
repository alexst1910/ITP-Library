import classes from "../pages/OrderPage.module.css";
import cover from "../images/library2.jpg";
import OrderForm from "../components/OrderForm/OrderForm";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const OrderPage = () => {
  return (
    <>
      <div className={`container ${classes.item}`}>
        <div className="row">
          <div className="col">
            <div className="position-relative d-none d-lg-block">
              <div
                className={`${classes.image}`}
                style={{ backgroundImage: `url(${cover})` }}
              ></div>
              <div className={`${classes.square}`}></div>
            </div>
          </div>

          <div className="col">
            <OrderForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
