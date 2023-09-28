const Radio = (props: { label: string }) => {
  return (
    <>
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label className="form-check-label ms-3 me-4" htmlFor="flexRadioDefault1">
        {props.label}
      </label>
    </>
  );
};

export default Radio;
