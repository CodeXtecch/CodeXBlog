import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dashboard from "../Dashbord";

const Editblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { postId } = useParams();
  const [error, setError] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // const handleImageChange = async (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     try {
  //       const data = await uploadImage(file);
  //       setImageUrl(data.imageUrl.replace(/\\/g, "/"));
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //       setError("Error uploading image");
  //     }
  //   }
  // };

  // const uploadImage = async (file) => {
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     const response = await fetch("http://localhost:3000/upload-image", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log("Image Upload Response:", data);
  //     return data;
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     throw error;
  //   }
  // };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/update-blog-post/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: content,
            blogimage: imageSrc,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Update Response:", data);
      // Handle success or update the state accordingly
    } catch (error) {
      console.error("Error updating blog post:", error);
      // Handle error or update the state accordingly
    }
  };

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      setImageSrc(reader.result);
      setError("");
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
      setError(error);
    };
  }

  const handleImageChange = (e) => {
    e.preventDefault();
    // console.log(e.target.files);
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  // useEffect(() => {
  //   setImageSrc(`http://localhost:3000/${imageUrl}`);
  // }, [imageUrl]);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/fetch-blog-post/${postId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        setTitle(data.title);
        setContent(data.content);
        setImageSrc(data.blogimage);

        if (data.blogimage) {
          setImageUrl(data.blogimage.replace(/\\/g, "/"));
        }
      } catch (error) {
        console.error("Error fetching blog post data:", error);
      }
    };

    fetchBlogPost();
  }, [postId]);

  return (
    <>
      <Dashboard />
      <div className="blog-create">
        <div className="title-blog my-3">
          <h1>Edit Blog Title</h1>
          <input
            className="input"
            name="title"
            placeholder="Enter Blog Title Here"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        {imageSrc && (
          <img src={imageSrc} alt="Blog" style={{ maxWidth: "100%" }} />
        )}
        <label className="custom-file-upload">
          <input type="file" name="blogimage" onChange={handleImageChange} />
          Upload Blog Image
        </label>
        <ReactQuill value={content} onChange={handleChange} />
        <button onClick={handleUpdate} className="btn btn-primary my-2">
          Update Blog Post
        </button>
      </div>
    </>
  );
};

export default Editblog;
