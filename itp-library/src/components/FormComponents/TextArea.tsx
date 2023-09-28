const TextArea = (props: { rows: number; placeholder: string }) => {
  return (
    <textarea
      className="form-control"
      placeholder={props.placeholder}
      rows={props.rows}
    />
  );
};
export default TextArea;
