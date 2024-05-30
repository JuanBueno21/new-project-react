import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
import React from "react";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    <h1 className="TodoCounter">
      You have <span>{completedTodos}</span> of <span>{totalTodos}</span> Todo`s
    </h1>
  );
}

export { TodoCounter };