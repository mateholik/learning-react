import { useState } from "react";
import Button from "../components/typescript-in-react/Button";
import Button2 from "../components/typescript-in-react/Button2";
import Button3 from "../components/typescript-in-react/Button3";
import User from "../components/typescript-in-react/User";
import Button4 from "../components/typescript-in-react/Generics";

const Ts = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const yOffset = event.clientY;
    console.log("Clicked at Y offset:", yOffset);
  };
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-8">
      <Button
        backgroundColor="red"
        fontSize={24}
        textColor="white"
        padding={[16, 32, 16, 32]}
        borderRadius={{
          topLeft: 5,
          topRight: 5,
          bottomLeft: 10,
          bottomRight: 10,
        }}
      />

      <Button2
        style={{
          backgroundColor: "red",
          fontSize: 24,
          color: "white",
          padding: "12px 14px",
        }}
        clickMe={handleClick}
      >
        Paspausk mane
      </Button2>

      <Button3 type="submit" updateCount={setCount}>
        {count}
      </Button3>
      <User />
      <Button4 count="red" countHistory={[6, 5]} />
    </div>
  );
};

export default Ts;
