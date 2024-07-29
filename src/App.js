import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { WithAuth } from "./components/WithAuth";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <WithAuth component={Dashboard} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
