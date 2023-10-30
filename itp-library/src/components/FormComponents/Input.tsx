import { ChangeEvent } from "react";
import React from "react";
const Input = (props: {
  type: string;
  placeholder: string;
  width: string;
  className: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      {" "}
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        name={props.name}
        style={{ width: `${props.width}` }}
        onChange={props.onChange}
        pattern={props.type === "tel" ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : ""}
        required
      ></input>
    </>
  );
};

export default Input;
