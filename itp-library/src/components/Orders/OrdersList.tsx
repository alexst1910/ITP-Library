import OrderItem from "../OrderItem/OrderItem";
import classes from "../Orders/OrdersList.module.css";
import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const OrdersList = () => {
  const { orderItems } = useContext(ShoppingCartContext);

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

export default OrdersList;
