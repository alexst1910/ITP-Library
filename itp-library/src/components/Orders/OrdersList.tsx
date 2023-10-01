import OrderItem from "../OrderItem/OrderItem";
import classes from "../Orders/OrdersList.module.css";
import { allBooks } from "../../assets/allBooks";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { OrderContext } from "../../context/OrderContext";

const OrdersList = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const { orderItems } = useContext(OrderContext);
  return (
    <div className={`container ${classes.item}`}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
      <div>
        {orderItems.map((item) => {
          return <OrderItem key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default OrdersList;
