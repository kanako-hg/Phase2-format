import { useState } from "react";
import Todo from "./Todo";

const Example = () => {
  const [val, setVal] = useState("");
  console.log(val);
  return (
    <>
      <h2>Reminder</h2>
      <Todo />
    </>
  );
};

export default Example;
