import React from "react";

type ButtonProps = {
  style: React.CSSProperties;
  clickMe: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({ style, clickMe, children }: ButtonProps) => {
  return (
    <button style={style} onClick={clickMe}>
      {children}
    </button>
  );
};

export default Button;
