import React, { useState, useEffect } from "react";
import Dashbord from "../Dashbord";
import { Link, useNavigate } from "react-router-dom";

const Showblog = () => {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog posts from the API
    fetch("http://localhost:3000/fetch-blog-posts")
      .then((response) => response.json())
      .then((data) => {
        // Update the component state with the fetched data
        setBlogData(data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render
  const handleEditClick = (postId) => {
    // Redirect to the Editblog component with the specific blog post ID
    navigate(`/dashboard/blogs/editblog/${postId}`);
  };
  return (
    <>
      <Dashbord />
      <div className="main">
        <div className="details">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>All Blogs</h2>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Action</td>
                  <td>Status</td>
                </tr>
              </thead>

              <tbody>
                {blogData.map((blog, index) => (
                  <tr key={index}>
                    <td>{blog.title}</td>
                    <td className="d-flex justify-content-end gap-3">
                      <button
                        className="btn btn-success"
                        onClick={() => handleEditClick(blog.post_id)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() => handleEditClick(blog.post_id)}
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                    <td>
                      <span className="status delivered">
                        {new Date(blog.upload_date).toLocaleDateString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showblog;
