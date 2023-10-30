import { ChangeEvent } from "react";
import React from "react";
const Date = (props: {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="date"
      className="form-control"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
export default Date;
