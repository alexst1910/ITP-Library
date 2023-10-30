import { ChangeEvent, MouseEventHandler, useContext } from "react";
import React from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const Button = (props: { onClick: MouseEventHandler<HTMLButtonElement> }) => {
  const { buttonValue } = useContext(ShoppingCartContext);
  return (
    <button
      className="btn btn-dark me-4 mb-5"
      style={{ width: "250px", fontFamily: "Lora" }}
      onClick={props.onClick}
      data-bs-toggle={buttonValue === "Update Order" ? "modal" : ""}
      data-bs-target={buttonValue === "Update Order" ? "#staticBackdrop" : ""}
    >
      {buttonValue}
    </button>
  );
};

export default Button;
