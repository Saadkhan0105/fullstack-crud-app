# CRUD Application with React, Node.js, Express, and MySQL

This is a full-stack CRUD (Create, Read, Update, Delete) application. The frontend is built using React with CSS for styling, and the backend uses Node.js, Express, and MySQL. This application allows users to add, view, update, and delete user details. The backend communicates with the database using RESTful APIs, and the data is stored in a MySQL database.

---

## Features

- **Frontend:**
  - Built with React.
  - Navigation via a top navbar with `Home`, `Add User`, and `List Users` options.
  - Form for adding new users, including fields for `name`, `email`, `password`, and `date of birth`.
  - List users displayed in a tabular format with options to edit and delete.
  - Styled using CSS.

- **Backend:**
  - Developed using Node.js and Express.
  - RESTful APIs for CRUD operations.
  - MySQL database integration using `mysql2` package.
  - Environment variables (`dotenv`) for secure database credentials.

---

## Prerequisites

Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [npm](https://www.npmjs.com/)

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <repository_name>
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the following:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=users_db
```

This will set up the database connection details.

### 3. Set Up the Frontend

```bash
cd frontend
npm install
```

### 4. Run the Application

```bash
cd backend
npm start
```
The Backend will run on `http://localhost:8080`.
```bash
cd frontend
npm start
```

The application will be running on `http://localhost:3000`.

---
### Project Structure

## Backend(/backend)

- server.js: Entry point of the backend.
- routes/userRoutes.js: Defines API routes for user CRUD operations.
- controllers/userController.js: Contains business logic for user operations.
- .env: Contains environment variables for database connection

## Frontend(/frontend)
- src/components/: Contains React components (Home, AddUser, UserList)
- src/App.js: Main component of the frontend.
- src/index.js: Entry point of the frontend.
- src/styles.css: Contains CSS styles for the frontend.
- package.json: Contains npm dependencies.
- package-lock.json: Contains npm dependencies with versions.
- .gitignore: Contains files and directories to be ignored by git.
- README.md: Contains project documentation.

---
## API Endpoints

### Base URL: `http://localhost:8080`
## API Endpoints

| Method | Endpoint         | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/users`      | Fetch all users.         |
| POST   | `/api/users`      | Add a new user.          |
| PUT    | `/api/users/:id`  | Update a user by ID.     |
| DELETE | `/api/users/:id`  | Delete a user by ID.     |






---
## Technologies Used

## Backend: 
- Node.js
- Express
- MySQL

## Frontend:
- React
- CSS
## Other Technologies Used:
- dotenv

---

## Usage

### Adding Users

To add a new user, navigate to the `Add User` page and fill out the form. Click the `Add User` button to submit the form. The user will be added to the list of users.

### Viewing Users

To view a list of users, navigate to the `List Users` page. The list of users will be displayed in a tabular format with options to edit and delete.

### Updating Users

To update an existing user, navigate to the `List Users` page and click the `Edit` button next to the user you want to update. Make the necessary changes and click the `Update` button to submit the form. The user will be updated in the list of users.

### Deleting Users

To delete an existing user, navigate to the `List Users` page and click the `Delete` button next to the user you want to delete. The user will be removed from the list of users.
---# fullstack-crud-app
