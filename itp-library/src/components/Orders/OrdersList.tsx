import OrderItem from "../OrderItem/OrderItem";
import classes from "../Orders/OrdersList.module.css";

const OrdersList = () => {
  return (
    <div className={`container ${classes.item}`}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
      <div>
        <OrderItem />
      </div>
    </div>
  );
};

export default OrdersList;
