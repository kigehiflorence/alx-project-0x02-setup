import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ label, size, shape, onClick }) => {
  let sizeClass = "";
  let shapeClass = "";

  switch (size) {
    case "small":
      sizeClass = "px-3 py-1 text-sm";
      break;
    case "medium":
      sizeClass = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClass = "px-6 py-3 text-lg";
      break;
    default:
      sizeClass = "px-4 py-2 text-base";
  }

  shapeClass = shape;

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClass} ${shapeClass} transition duration-300 hover:bg-blue-700`}
    >
      {label}
    </button>
  );
};

export default Button;
