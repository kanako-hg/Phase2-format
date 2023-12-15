import React, { useState } from "react";
import Form from "./Form.js";
import List from "./List.js";
import { nanoid } from "nanoid";

const App = () => {
  // console.log("App");
  const [todos, setTodos] = useState([
    // {
    //   content: "課題をする",
    // },
    // {
    //   content: "洗濯をする",
    // },
    // {
    //   content: "電話をする",
    // },
  ]);
  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content: content,
        id: nanoid(),
      },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
