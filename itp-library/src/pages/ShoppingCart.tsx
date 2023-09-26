import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";
import classes from "../pages/ShoppingCart.module.css";
import { BestBooks, RecentBooks } from "../assets/BookDetails";
import { useParams } from "react-router-dom";
import { allBooks } from "../assets/allBooks";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className={`container ${classes.item} `}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
    </div>
  );
};

export default ShoppingCart;
