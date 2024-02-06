const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer"); // Import multer for handling file uploads
const upload = multer({
  dest: "uploads/ ",
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      // Use the original filename instead of a hash code
      cb(null, file.originalname);
    },
  }),
});

app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "corestring",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", (req, res) => {
  const { id, name, email, password } = req.body;

  const sql =
    "INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?)";
  const values = [id, name, email, password];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json({ message: "User added successfully" });
    }
  });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  const values = [email, password];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      if (results.length > 0) {
        // Login successful
        res.json({ message: "Login successful", user: results[0] });
      } else {
        // Login failed
        res.status(401).json({ message: "Invalid email or password" });
      }
    }
  });
});

// ...

// Insert Blog Post API
// Insert Blog Post API with image upload
app.post("/insert-blog-post", upload.single("blogimage"), (req, res) => {
  const { title, content } = req.body;
  const imagePath = req.file ? req.file.path : null; // Check if a file was uploaded

  const sql =
    "INSERT INTO blog_posts (title, content, blogimage) VALUES (?, ?, ?)";
  const values = [title, content, imagePath];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json({ message: "Blog post added successfully" });
    }
  });
});

// Fetch Blog Posts API
app.get("/fetch-blog-posts", (req, res) => {
  const sql =
    "SELECT `post_id`, `title`, `content`,`blogimage`, `upload_date` FROM `blog_posts`";

  connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results);
    }
  });
});

// Update Blog Post API
// Update Blog Post API
app.put("/update-blog-post/:id", upload.single("blogimage"), (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  const imagePath = req.file ? req.file.path : null;

  const sql =
    "UPDATE blog_posts SET title = ?, content = ?, blogimage = ? WHERE post_id = ?";
  const values = [title, content, imagePath, postId];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      if (results.affectedRows > 0) {
        res.json({ message: "Blog post updated successfully" });
      } else {
        res.status(404).json({ message: "Blog post not found" });
      }
    }
  });
});

// Fetch Single Blog Post API
app.get("/fetch-blog-post/:id", (req, res) => {
  const postId = req.params.id;

  const sql = "SELECT * FROM blog_posts WHERE post_id = ?";
  const values = [postId];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
    } else {
      if (results.length > 0) {
        res.json(results[0]); // Send the first result (should be the only one)
      } else {
        res.status(404).json({ message: "Blog post not found" });
      }
    }
  });
});

// ...

// Close the MySQL connection when the app is terminated
process.on("SIGINT", () => {
  connection.end();
  process.exit();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
