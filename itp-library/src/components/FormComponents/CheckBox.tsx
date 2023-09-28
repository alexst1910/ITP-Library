const CheckBox = (props: { label: string }) => {
  return (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {props.label}
      </label>
    </>
  );
};
export default CheckBox;
