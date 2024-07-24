import React from "react";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.task} - {todo.username} ({todo.email}) -{" "}
          {todo.completed ? "Completed" : "Not Completed"}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
