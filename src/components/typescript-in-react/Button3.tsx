import React from "react";

type ButtonProps = {
  children: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="submit" onClick={() => onClick((prev) => prev + 1)}>
      count: {children}
    </button>
  );
};

export default Button;
