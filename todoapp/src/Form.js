// import React, { useState } from "react";

// const Form = ({ addTodo }) => {
//   //   console.log("Form");
//   let [value, setValue] = useState("");

//   const handleSubmit = (e) => {
//     // formを送信(Submit)した際の処理を記述します。
//     // console.log("value:", e.target.value);
//     e.preventDefault();
//     if (value === "") {
//       alert("空白です");
//     } else {
//       addTodo(value);
//       console.log(value);
//       setValue("");
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={value}
//         type="text"
//         id="textForm"
//         onChange={(e) => {
//           setValue(e.target.value);
//           console.log(setValue);
//         }}
//       />
//     </form>
//   );
// };

// export default Form;

import React from "react";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    // formを送信(Submit)した際の処理を記述します。
    e.preventDefault();
    if (val === "") {
      alert("空白以外を入れてください");
    } else {
      setVal("");
      addTodo(val);
    }
  };
  console.log("Form submitted.");

  const text = (e) => {
    setVal(e.target.value);
  };
  console.log(val);
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={val} onChange={text}></input>
    </form>
  );
};

export default Form;
