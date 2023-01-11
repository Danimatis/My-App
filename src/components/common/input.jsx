const Input = ({ type, id, label, error, ...rest }) => {
  return (
    <>
      <div className="form-floating w-50 ">
        <input
          className="form-control"
          id={id}
          type={type}
          placeholder={label}
          {...rest}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="text-danger my-2">{error}</div>
    </>
  );
};
export default Input;
