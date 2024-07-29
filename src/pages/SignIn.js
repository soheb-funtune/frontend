import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Heading,
} from "../components/styled-component/styled-componet";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/user/login-user",
        { username, password }
      );
      console.log(response?.data?.data?.token);

      if (response?.data?.data?.token) {
        console.log("User logged in successfully");
        localStorage.setItem("token", response?.data?.data?.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error logging in user", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Sign In</Heading>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Sign In</Button>

      <Link className="rrd-link" to="/signup">
        Don't have an account? Sign Up
      </Link>
    </Form>
  );
};
