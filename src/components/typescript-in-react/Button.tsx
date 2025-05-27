import React from "react";

type Color = "red" | "white" | "blue" | "green"; //union

type ButtonProps = {
  backgroundColor: Color;
  fontSize: number;
  textColor: Color;
  padding: [number, number, number, number]; //tupple - limited and specified array
};

const Button = ({
  backgroundColor,
  fontSize,
  textColor,
  padding,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        color: textColor,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      }}
    >
      click me
    </button>
  );
};

export default Button;
