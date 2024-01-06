// import React, { useState } from "react";

// const Item = ({ content, id, deleteTodo }) => {
//   //   console.log("Item");
//   const [isDone, setIsDone] = useState(false);
//   const handleDelete = () => {
//     deleteTodo(id);
//   };
//   return (
//     <li>
//       <input
//         type="checkbox"
//         onChange={() => {
//           setIsDone(!isDone);
//         }}
//       />
//       <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {content}
//       </span>
//       <button onClick={handleDelete}>削除</button>
//     </li>
//   );
// };

// export default Item;

import React from "react";
import { useState } from "react";

const Item = ({ content, id, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);

  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          setIsDone(!isDone);
        }}
      />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={() => deleteTodo(id)}>削除</button>
    </li>
  );
};

export default Item;
