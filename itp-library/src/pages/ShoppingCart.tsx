import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";
import classes from "../pages/ShoppingCart.module.css";
const ShoppingCart = () => {
  return (
    <div className={`container ${classes.item} `}>
      <ShoppingCartItem />
    </div>
  );
};

export default ShoppingCart;
