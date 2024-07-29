import React, { useState } from "react";
import { Button, Form, Input } from "./styled-component/styled-componet";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <form
      className="user-form"
      style={{ flexDirection: "column", gap: "0px", marginTop: "20px" }}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoForm;
