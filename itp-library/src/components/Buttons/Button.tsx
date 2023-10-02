import { ChangeEvent, MouseEventHandler } from "react";

const Button = (props: {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="btn btn-dark me-4 mb-5"
      style={{ width: "250px", fontFamily: "Lora" }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
