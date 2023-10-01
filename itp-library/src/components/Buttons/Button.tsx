import { ChangeEvent, MouseEventHandler } from "react";

const Button = (props: { value: string }) => {
  return (
    <button
      className="btn btn-dark me-4 mb-5"
      style={{ width: "250px", fontFamily: "Lora" }}
    >
      {props.value}
    </button>
  );
};

export default Button;
