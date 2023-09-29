import { ChangeEvent } from "react";

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
        required
      ></input>
    </>
  );
};

export default Input;
