import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "./styled-component/styled-component";

const UserForm = ({ addUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    addUser(data.username, data.email);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="input-field"
        type="text"
        placeholder="Username"
        {...register("username", { required: "Username is required" })}
      />
      {errors.username && <p>{errors.username.message}</p>}

      <Input
        className="input-field"
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Button type="submit">Add User</Button>
    </Form>
  );
};

export default UserForm;
