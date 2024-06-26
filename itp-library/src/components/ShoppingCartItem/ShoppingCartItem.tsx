import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../ShoppingCartItem/ShoppingCartItem.module.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import React from "react";
const ShoppingCartItem = (props: {
  id: number;
  title: string;
  author: string;
  price: number;
  cover: string;
}) => {
  const { removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div className="row d-flex flex-row justify-content-between">
      <div className="col d-flex flex-row ">
        <div
          className={` ${classes.image} d-none d-md-block`}
          style={{ backgroundImage: `url(${props.cover})` }}
        ></div>
        <div className="ps-5">
          <h6 className={classes.lora}>{props.title}</h6>
          <p>
            by <b>{props.author}</b>
          </p>
        </div>
      </div>
      <div className="col d-flex  justify-content-end">
        <div>
          <h3 className={`${classes.gold} ps-5 m-0`}>${props.price}</h3>

          <button
            type="button"
            className={`btn border-0 ${classes.button} p-0`}
            onClick={() => removeFromCart(props.id)}
          >
            <p className="fs-5">
              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "#000000", paddingRight: "10px" }}
              />
              Remove
            </p>
          </button>
        </div>
      </div>
      <hr className="mt-4"></hr>
    </div>
  );
};
export default ShoppingCartItem;
