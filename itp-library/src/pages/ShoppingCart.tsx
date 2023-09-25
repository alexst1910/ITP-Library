import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";
import classes from "../pages/ShoppingCart.module.css";

const ShoppingCart = () => {
  return (
    <div className={`container ${classes.item} `}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
      <ShoppingCartItem />
    </div>
  );
};

export default ShoppingCart;
