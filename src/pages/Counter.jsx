import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <main>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <span>{value}</span>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </main>
  );
};
