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
  const [string, setString] = useState("");
  const [error, setError] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setImage(selectedImage);
  // };

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      setString(reader.result);
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

  const handleSaveBlogPost = async (e) => {
    e.preventDefault();
    const titleTrimmed = title.trim();
    const contentTrimmed = content.trim();

    if (!titleTrimmed || !contentTrimmed || !string) {
      toast.error("Title, content, and image are required");
      return;
    }

    // const payload = {
    //   title: titleTrimmed,
    //   content: contentTrimmed,
    //   blogimage: string,
    // };

    // const response = await fetch("http://localhost:3000/insert-blog-post", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // console.log(response);

    let form_data = new FormData();
    form_data.append("title", titleTrimmed);
    form_data.append("content", contentTrimmed);
    form_data.append("blogimage", string);

    // Convert FormData to a plain object
    let formDataObject = {};
    form_data.forEach(function (value, key) {
      formDataObject[key] = value;
    });

    // Convert plain object to JSON
    let jsonData = JSON.stringify(formDataObject);

    console.log("JSON Data:", jsonData);

    fetch("http://localhost:3000/insert-blog-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
      body: jsonData, // Send JSON data in the body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        // handle success
      })
      .catch((error) => {
        console.error("Error:", error);
        // handle error
      });

    // let form_data = new FormData();
    // form_data.append("title", titleTrimmed);
    // form_data.append("content", contentTrimmed);
    // form_data.append("blogimage", string);

    // // Convert FormData to object
    // let formDataObject = {};
    // form_data.forEach(function (value, key) {
    //   formDataObject[key] = value;
    // });

    // console.log("Form Data:", formDataObject);

    // let form_data = new FormData();
    // form_data.append("title", titleTrimmed);
    // form_data.append("content", contentTrimmed);
    // form_data.append("blogimage", string);
    // console.log(form_data);

    // fetch("http://localhost:3000/insert-blog-post", {
    //   method: "POST",
    //   body: formDataObject,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     // handle success
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     // handle error
    //   });

    // fetch("http://localhost:3000/insert-blog-post", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     toast.success("Blog post saved successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Error saving blog post:", error);
    //     toast.error("Error saving blog post");
    //   });
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
          <input type="file" onChange={handleImageChange} />
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
