import Button from "../components/typescript-in-react/Button";

import Button2 from "../components/typescript-in-react/Button2";
const Ts = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const yOffset = event.clientY;
    console.log("Clicked at Y offset:", yOffset);
  };
  return (
    <>
      <div className="w-40 m-16">
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
      </div>

      <div className="w-40 m-16">
        <Button2
          style={{
            backgroundColor: "red",
            fontSize: 24,
            color: "white",
            padding: "12px 14px",
          }}
          clickMe={handleClick}
        />
      </div>
    </>
  );
};

export default Ts;
