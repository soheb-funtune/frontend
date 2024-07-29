import React from "react";
import { Button } from "./styled-component/styled-componet";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.task} - {todo.username} ({todo.email}) -{" "}
          {/* {todo.completed ? "Completed" : "Not Completed"} */}
          <Button onClick={() => deleteTodo(todo._id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
