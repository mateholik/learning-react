import React from "react";

type ButtonProps = {
  style: React.CSSProperties;
  clickMe: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ style, clickMe }: ButtonProps) => {
  return (
    <button style={style} onClick={clickMe}>
      click me
    </button>
  );
};

export default Button;
