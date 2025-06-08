import React from "react";
import { type ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonSize = "medium",
  buttonBackgroundColor = "blue",
  action,
}) => {
  const sizeClass =
    buttonSize === "small"
      ? "py-1 px-3 text-sm"
      : buttonSize === "large"
      ? "py-3 px-6 text-lg"
      : "py-2 px-4 text-base";

  const colorClass = {
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    green: "bg-green-500 hover:bg-green-600",
  }[buttonBackgroundColor];

  return (
    <button
      onClick={action}
      className={`${sizeClass} ${colorClass} text-white rounded-lg focus:outline-none`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
