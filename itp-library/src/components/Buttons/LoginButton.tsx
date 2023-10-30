import { MouseEventHandler } from "react";
import React from "react";
const LoginButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  value: string;
}) => {
  return (
    <button
      className="btn btn-dark ms-3 mb-5"
      style={{ width: "200px", fontFamily: "Lora" }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default LoginButton;
