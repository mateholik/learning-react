import React, { useRef, useState } from "react";

type User = {
  name: string;
  id: number;
};

type Guest = Omit<User, "name">;

const sharedValues = ["smart", "lazy", "openminded"] as const;
const User = () => {
  const [user, setUser] = useState<User | null>(null);

  setTimeout(() => {
    setUser({ name: "John", id: 3 });
  }, 1000);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div ref={divRef}>USER {user?.name}:</div>
      {sharedValues.map((option) => (
        <div key={option}>{option}</div>
      ))}
    </div>
  );
};

export default User;
