import React from "react";

type Color = "red" | "white" | "blue" | "green"; //union

type ButtonProps = {
  backgroundColor: Color;
  fontSize: number;
  textColor: Color;
  padding: [number, number, number, number]; //tupple - limited and specified array
  borderRadius: {
    topLeft: number;
    topRight: number;
    bottomLeft: number;
    bottomRight: number;
  };
  // borderRadius: Record<string, number>;
};

const Button = ({
  backgroundColor,
  fontSize,
  textColor,
  padding,
  borderRadius,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        color: textColor,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`,
      }}
    >
      click me
    </button>
  );
};

export default Button;
