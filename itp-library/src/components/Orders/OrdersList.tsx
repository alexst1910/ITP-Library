import OrderItem from "../OrderItem/OrderItem";
import classes from "../Orders/OrdersList.module.css";
import { allBooks } from "../../assets/allBooks";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const OrdersList = () => {
  const { cartAmount, getTotal, orderItems } = useContext(ShoppingCartContext);
  // const price = getTotal();
  // const itemsCount = cartAmount();

  return (
    <div className={`container ${classes.item}`}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
      <div>
        {orderItems.map((order) => {
          return <OrderItem key={order.id} total={order.price} />;
        })}
      </div>
    </div>
  );
};

export default OrdersList;
