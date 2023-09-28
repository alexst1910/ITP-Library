const Input = (props: {
  type: string;
  placeholder: string;
  width: string;
  className: string;
}) => {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
      style={{ width: `${props.width}` }}
    ></input>
  );
};

export default Input;
