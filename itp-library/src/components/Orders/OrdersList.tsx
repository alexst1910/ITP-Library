import OrderItem from "../OrderItem/OrderItem";
import classes from "../Orders/OrdersList.module.css";
import { allBooks } from "../../assets/allBooks";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import Auth from "../Authentication/Auth";
const OrdersList = () => {
  const { cartItems, orderItems } = useContext(ShoppingCartContext);

  return (
    <div className={`container ${classes.item}`}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
      <div>
        {orderItems.map((order, index) => {
          return (
            <OrderItem
              key={index}
              total={order.totalPrice}
              amount={order.totalQuantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Auth(OrdersList);
