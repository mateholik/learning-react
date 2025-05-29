import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="write smth..."
      />

      <div>value: {inputValue}</div>
    </>
  );
};

export default Input;
