import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";
import classes from "../pages/ShoppingCart.module.css";
import { BestBooks, RecentBooks } from "../assets/BookDetails";
import { useParams } from "react-router-dom";

const ShoppingCart = () => {
  const { id } = useParams();
  const allBooks = BestBooks.concat(RecentBooks);
  const books = allBooks.find((book) => book.id.toString() === id);
  return (
    <div className={`container ${classes.item} `}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
    </div>
  );
};

export default ShoppingCart;
