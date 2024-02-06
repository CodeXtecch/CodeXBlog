import React from "react";
import "./Dashbord.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="title">Corestring</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <Link className="title" to="/dashboard/home">
                Home
              </Link>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="pencil-outline"></ion-icon>
              </span>
              <Link className="title" to="/dashboard/create-blog-post">
                Post Blog
              </Link>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <Link to="/dashboard/blogs" className="title">All Blogs</Link>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">Help</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="title">Settings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span className="title">Password</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashbord;
