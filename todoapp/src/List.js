// import React from "react";
// import Item from "./Item.js";

// const List = ({ todos, deleteTodo }) => {
//   //   console.log("List");
//   return (
//     <>
//       <ul>
//         {/* {console.log(deleteTodo)} */}
//         {todos.map((todo) => {
//           return (
//             <Item
//               content={todo.content}
//               id={todo.id}
//               key={todo.id}
//               deleteTodo={deleteTodo}
//             />
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default List;

import React from "react";
import Item from "./Item";

const List = ({ todos, deleteTodo }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            content={todo.content}
            id={todo.id}
            key={todo.id}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default List;
