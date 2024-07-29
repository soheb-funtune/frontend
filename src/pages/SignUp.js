import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Heading,
  Input,
} from "../components/styled-component/styled-componet";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/user/create-user",
        { username, password }
      );
      localStorage.setItem("token", response?.data?.data?.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Sign Up</Heading>
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
      <Button type="submit">Sign Up</Button>
      <Link className="rrd-link" to={"/"}>
        Already have an account? Sign In
      </Link>
    </Form>
  );
};
