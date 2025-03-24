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
