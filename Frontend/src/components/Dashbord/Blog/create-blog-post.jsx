import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dashbord from "../Dashbord";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blogpost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSaveBlogPost = () => {
    const titleTrimmed = title.trim();
    const contentTrimmed = content.trim();

    if (!titleTrimmed || !contentTrimmed || !image) {
      toast.error("Title, content, and image are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", titleTrimmed);
    formData.append("content", contentTrimmed);
    formData.append("blogimage", image);

    fetch("http://localhost:3000/insert-blog-post", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Blog post saved successfully");
      })
      .catch((error) => {
        console.error("Error saving blog post:", error);
        toast.error("Error saving blog post");
      });
  };

  return (
    <>
      <Dashbord />
      <div className="blog-create">
        <div className="title-blog my-3">
          <h1>Enter Blog Title Here</h1>
          <input
            className="input"
            name="title"
            placeholder="Enter Blog Title Here"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input type="file"  onChange={handleImageChange} />
          <ReactQuill
            value={content}
            onChange={handleChange}
            modules={Blogpost.modules}
            formats={Blogpost.formats}
          />
          <button onClick={handleSaveBlogPost} className="btn btn-primary my-2">
            Save Post
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

Blogpost.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

Blogpost.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];

export default Blogpost;
