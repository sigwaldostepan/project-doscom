const Button = ({ type, width, message }) => {
  return (
    <button
      type={type}
      className={`${width} px-4 py-2 text-lg btn btn-primary text-white rounded-lg font-bold transition-colors hover:bg-btn-secondary`}
    >
      {message}
    </button>
  );
};

export default Button;
