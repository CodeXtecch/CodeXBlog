// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login"; // Assuming you have a Login component
import Dashboard from "./components/Dashbord/Dashbord"; // Assuming you have a Dashboard component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/Dashbord/Blog/Home";
import Blogpost from "./components/Dashbord/Blog/create-blog-post";
import Showblog from "./components/Dashbord/Blog/Showblog";
import Editblog from "./components/Dashbord/Blog/Editblog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/create-blog-post" element={<Blogpost />} />
        <Route path="/dashboard/blogs" element={<Showblog />} />
        <Route path="/dashboard/blogs/editblog/:postId" element={<Editblog />} />
      </Routes>
    </Router>
  );
}

export default App;
