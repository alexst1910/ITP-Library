import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";
import classes from "../pages/ShoppingCart.module.css";
import { BestBooks, RecentBooks } from "../assets/BookDetails";
import { useParams } from "react-router-dom";
import { allBooks } from "../assets/allBooks";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

const ShoppingCart = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className={`container ${classes.item} `}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
      {allBooks.map((item) => {
        if (cartItems[item.id] !== 0) {
          return (
            <ShoppingCartItem
              key={item.id}
              id={item.id}
              title={item.title}
              author={item.author}
              price={item.price}
              cover={item.cover}
            />
          );
        }
      })}
    </div>
  );
};

export default ShoppingCart;
