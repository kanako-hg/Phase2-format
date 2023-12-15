import React, { useState } from "react";

const Form = ({ addTodo }) => {
  //   console.log("Form");
  let [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // formを送信(Submit)した際の処理を記述します。
    // console.log("value:", e.target.value);
    e.preventDefault();
    if (value === "") {
      alert("空白です");
    } else {
      addTodo(value);
      console.log(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        id="textForm"
        onChange={(e) => {
          setValue(e.target.value);
          console.log(setValue);
        }}
      />
    </form>
  );
};

export default Form;
