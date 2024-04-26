import { useState } from "react";

const Button = ({ type, width, message }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setIsClicked(true);
    }, 100);

    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };

  return (
    <button
      type={type}
      className={`${width} px-4 py-2 text-lg btn btn-primary text-white rounded-lg font-bold transition-colors hover:bg-btn-secondary `}
      disabled={isClicked}
      onClick={handleClick}
    >
      {message}
    </button>
  );
};

export default Button;
