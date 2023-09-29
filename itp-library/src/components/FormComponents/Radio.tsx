import { ChangeEvent } from "react";

const Radio = (props: {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        className="form-check-input"
        type="radio"
        id="flexRadioDefault1"
        checked={props.checked}
        onChange={props.onChange}
      />
      <label className="form-check-label ms-3 me-4" htmlFor="flexRadioDefault1">
        {props.label}
      </label>
    </>
  );
};

export default Radio;
