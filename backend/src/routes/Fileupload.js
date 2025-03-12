import multer from "multer";
import express from "express";
import path from "path";
import mysql from "mysql";
import cors from "cors";

const port = 3000;
const app = express();
app.use(cors());// this ensures that the api can be accessed from different frontend end which are not necessarily on the same port;
app.use(express.json()); // make sure the default data to/from the endpoints are treated as json;

// MySQL Connection Pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Dan443325",
  database: "webapp",
});

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Upload a PDF
app.post("/upload", upload.single("pdfFile"), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const { title, description } = req.body;
    const filename = req.file.filename;
    const filePath = `/uploads/${filename}`;
    const uploadDate = new Date(); // Corrected Date format

    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Database connection failed:", err);
        return res.status(500).json({ error: "Database error" });
      }

      const sql = `INSERT INTO pdf_files (f_name, f_path, upload_date) VALUES (?, ?, ?)`;
      connection.query(sql, [filename, filePath, uploadDate], (error, results) => {
        connection.release();// release connection when process is done;
        if (error) {
          console.error("Database error:", error);
          return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: "File uploaded successfully"});
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all PDFs
app.get("/pdfs", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed:", err);
      return res.status(500).json({ error: "Database error" });// terminate further obstructions to the server
    }

    const sql = "SELECT * FROM pdf_files";
    connection.query(sql, (error, results) => {
      connection.release();
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(results);
    });
  });
});

// Get a single PDF by ID
app.get("/pdfs/:id", (req, res) => {
  const { id } = req.params;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed:", err);
      return res.status(500).json({ error: "Database error" });
    }

    const sql = "SELECT f_path FROM pdf_files WHERE id = ?";
    connection.query(sql, [id], (error, results) => {
      connection.release();
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
      }
      if (results.length === 0) return res.status(404).json({ error: "PDF not found" });

      res.json(results[0]);
    });
  });
});

// Delete a PDF
app.delete("/pdfs/:id", (req, res) => {
  const { id } = req.params;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed:", err);
      return res.status(500).json({ error: "Database error" });
    }
    const sql = "DELETE FROM pdf_files WHERE id = ?";
    connection.query(sql, [id], (error, results) => {
      connection.release();
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
      }
      if (results.affectedRows === 0) return res.status(404).json({ error: "PDF not found" });// incase there is no such id in the database

      res.json({ message: "PDF deleted successfully" });
    });
  });
});

// Serve uploaded files statically so that the files can be acessed through the browser/api end points 
app.use("/uploads", express.static("uploads"));

app.listen(port, () => console.log(`Server running on port ${port}`));
