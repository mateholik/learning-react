import React from "react";

type ButtonProps = {
  children: number;
  updateCount: React.Dispatch<React.SetStateAction<number>>;
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({ children, updateCount, ...rest }: ButtonProps) => {
  return (
    <button {...rest} onClick={() => updateCount((prev) => prev + 1)}>
      count: {children}
    </button>
  );
};

export default Button;
