const Date = (props: { placeholder: string }) => {
  return (
    <input
      type="date"
      className="form-control"
      placeholder={props.placeholder}
    />
  );
};
export default Date;
