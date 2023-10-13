import ShoppingCartItem from "../components/ShoppingCartItem/ShoppingCartItem";
import classes from "../pages/ShoppingCart.module.css";
import { allBooks } from "../assets/allBooks";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const { cartItems, getTotal, isAuth } = useContext(ShoppingCartContext);
  const total = getTotal();
  const cartBooks = allBooks.filter((item) => cartItems[item.id] > 0);
  return (
    <div className={`container ${classes.item}`}>
      <div className={`fs-4 ${classes.lora} mt-5`}>Your Products</div>
      <div>
        {cartBooks.map((item) => {
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
        })}
      </div>

      <div className="container d-flex justify-content-between mb-4">
        <div className={`fs-4 ${classes.lora}`}>
          <div className="mb-4">Total: </div>
          <div>
            {" "}
            <Link to="/">
              <button className="btn border-dark" style={{ width: "200px" }}>
                <span className={classes.buttontext}>Continue shopping</span>
              </button>
            </Link>
          </div>
        </div>
        <div className={`fs-4 ${classes.lora}`}>
          <div className={`mb-4 d-flex justify-content-end ${classes.gold}`}>
            ${total}
          </div>
          <div>
            {isAuth && (
              <Link to="/order">
                <button className="btn btn-dark" style={{ width: "200px" }}>
                  Place Order
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
