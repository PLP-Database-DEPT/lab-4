import express from "express";
import mysql from "mysql";


const app = express();

app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "library",
});

// Check database connection
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1); 
    }
    console.log("Connected to the MySQL database.");
});

// Fetch all books from the database
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"; 

    db.query(q, (err, data) => {
        if (err) {
            console.error("Error fetching books: ", err); 
            return res.status(500).json({ message: "Error fetching books", error: err });
        }

        if (data.length === 0) {
            return res.status(200).json({ message: "No books found", data: [] });
        }

        return res.status(200).json({ message: "Books fetched successfully", data: data });
    });
});

// Add a new Book to database
app.post("/books", (req, res) => {
    if (!req.body.title || !req.body.descr || !req.body.cover) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const q = "INSERT INTO books(`title`, `descr`, `cover`) VALUES (?, ?, ?)";
    const values = [req.body.title, req.body.descr, req.body.cover];

    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Error inserting book: ", err);
            return res.status(500).json({ message: "Error inserting book", error: err });
        }

        return res.status(201).json({
            message: "Book has been created successfully",
            bookId: data.insertId, 
        });
    });
});

// Update an existing book in the database
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const { title, descr, cover } = req.body;
    
    if (!title || !descr || !cover) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const q = "UPDATE books SET `title`=?, `descr`=?, `cover`=? WHERE id=?";
    const values = [title, descr, cover];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) {
            return res.status(500).json(err); 
        }

        if (data.affectedRows === 0) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({
            message: "Book has been updated successfully",
            data: data
        });
    });
});

// Delete a book from the database
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id; 

    const q = "DELETE FROM books WHERE id = ?"; 

    db.query(q, [bookId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (data.affectedRows === 0) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({
            message: "Book has been deleted successfully",
            data: data  
        });
    });
});

// Start the server and listen for incoming requests
app.listen(8800, () => {
    console.log("Connected to Server on port 8800");
});
