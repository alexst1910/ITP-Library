import { ChangeEvent } from "react";

const Select = (props: {
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      name={props.name}
      onChange={props.onChange}
    >
      <option defaultValue={props.placeholder}>{props.placeholder}</option>
      <option value="1">Romania</option>
      <option value="2">United Kingdom</option>
      <option value="3">United States</option>
    </select>
  );
};
export default Select;
