import { ChangeEvent } from "react";
const RadioDetails = [
  {
    id: "flexRadioDefault1",
    value: "online",
  },
  {
    id: "flexRadioDefault2",
    value: "cash",
  },
];
const Radio = (props: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      {RadioDetails.map((radio) => {
        return (
          <>
            <input
              className="form-check-input"
              type="radio"
              id={radio.id}
              value={radio.value}
              name="payment"
              onChange={props.onChange}
            />
            <label
              className="form-check-label ms-3 me-4"
              htmlFor="flexRadioDefault1"
            >
              {radio.value}
            </label>
          </>
        );
      })}
    </>
  );
};

export default Radio;
