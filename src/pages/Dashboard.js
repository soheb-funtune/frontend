import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Navigate } from "react-router-dom";
import { Button, Input } from "../components/styled-component/styled-componet";

export const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchTodos();
  }, []);

  if (!token) {
    return <Navigate to="/" />;
  }

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (task) => {
    try {
      const response = await axios.post("http://localhost:8000/api/todos", {
        task,
        username,
        email,
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="App">
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </Button>
      <h1>Todo List</h1>
      <div className="user-form">
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
