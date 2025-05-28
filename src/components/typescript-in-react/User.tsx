import React, { useRef, useState } from "react";

type User = {
  name: string;
  id: number;
};
const User = () => {
  const [user, setUser] = useState<User | null>(null);

  setTimeout(() => {
    setUser({ name: "John", id: 3 });
  }, 1000);

  const divRef = useRef<HTMLDivElement>(null);

  return <div ref={divRef}>{user?.name}</div>;
};

export default User;
