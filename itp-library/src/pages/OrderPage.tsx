import classes from "../pages/OrderPage.module.css";
import cover from "../images/library2.jpg";
import OrderForm from "../components/OrderForm/OrderForm";
const OrderPage = () => {
  return (
    <div className={`container ${classes.item}`}>
      <div className="row">
        <div className="col position-relative">
          <div
            className={`${classes.image}`}
            style={{ backgroundImage: `url(${cover})` }}
          ></div>
          <div className={`${classes.square}`}></div>
        </div>

        <div className="col">
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
