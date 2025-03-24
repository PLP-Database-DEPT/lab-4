## Library Crud API
This is a simple Library CRUD (Create, Read, Update, Delete) API built using Node.js. The API allows users to perform basic operations on a library database, such as adding new books, viewing existing books, updating book details, and deleting books.

### Features:
 - Create a new book entry
 - Retrieve all books or a single book by ID
 - Update book details
 - Delete a book from the library

## Run Locally
Create a new Database
```bash
  CREATE DATABASE library;
```
Create a New table
```bash
USE library;
CREATE TABLE books(
id int primary key auto_increment,
title varchar(100) NOT NULL,
descr varchar(255) NOT NULL,
cover varchar(50) NOT NULL
)
```
Clone the project

```bash
  git clone https://github.com/PLP-Database-DEPT/lab-4.git
```

Go to the project directory

```bash
  cd lab-4
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
## Testing the API Endpoints
To interact with and test the API endpoints, you can use **Postman** or the **Thunder Client** extension.
### How to Test:
- Open your chosen tool (Postman or Thunder Client).
- Set the HTTP method (GET, POST, PUT, DELETE) and URL to the corresponding endpoint from your API.
- Add request parameters or body data if needed.
- Send the request and check the response.
### HTTP Methods and Their Usage:
**1. Fetch all books (GET)**
   - Used to fetch all the books in the library.
   - This will retrieve a list of all books in the database.
   - Request:
     ```bash
     GET http://127.0.0.1:8800/books
     ```
---
**2. Fetch a specific book (GET)**
   - Used to fetch a particular book by its ID.
   - This will get the details of a specific book
   - Request:
     ```bash
     GET http://127.0.0.1:8800/books/1
     ```
 ---
 **3. Add a new book (POST)**
   - Used to create a new book entry in the library.
   - Add the book's details (e.g., title,descr,cover) in the request body.
   - Request:
     ```bash
     POST http://127.0.0.1:3000/books
     ```
---
  **4. Update an existing book (PUT)**
   - Used to update the details of an existing book by its ID.
   - Add the ID of the book you want to update.
   - Request:
     ```bash
     PUT http://127.0.0.1:3000/books/1
     ```
---
  **4. Delete a book (DELETE)**
   - Used to remove a book from the library by its ID.
   - Add the ID of the book you want to delete.
   - Request:
     ```bash
     PUT http://127.0.0.1:3000/books/1
     ```
