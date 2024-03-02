// Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData
      );
      // console.log("Login successful:", response.data);
      toast.success("Login successful!");
      // Redirect to the dashboard page after successful login
      navigate("/dashboard/home");
    } catch (error) {
      // console.error("Login failed:", error.response.data);
      // Handle login error (e.g., show error message)
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="main-login">
        <form className="form" onSubmit={handleSubmit}>
          <p className="form-title">Login To Corestring</p>
          <div className="input-container">
            <input
              placeholder="Enter email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Enter password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className="submit" type="submit">
            Login
          </button>
        </form>
      </div>

      <ToastContainer />
    </>
  );
}

export default Login;
