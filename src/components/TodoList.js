import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.task} - {todo.username} ({todo.email}) -{" "}
          {/* {todo.completed ? "Completed" : "Not Completed"} */}
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
