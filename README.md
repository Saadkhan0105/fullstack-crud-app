# Full Stack CRUD Application with React, Node.js, Express, and MySQL

This is a **Full Stack CRUD** (Create, Read, Update, Delete) application built with **React** on the frontend, **Node.js** with **Express** for the backend, and **MySQL** for database management. This application enables users to manage user data by performing CRUD operations. The frontend communicates with the backend through RESTful APIs, and the data is stored in a MySQL database.

---

## Features

### Frontend:
- Built with **React.js** for dynamic and responsive user interfaces.
- Navigation is handled via a top navbar with the following options:
  - **Home**: Displays information about the application.
  - **Add User**: Form to add new users.
  - **List Users**: Displays a list of all users with options to update and delete users.
- **Forms** for adding and updating user data (name, email, password, and date of birth).
- **Responsive and user-friendly design** styled using **CSS**.

### Backend:
- Developed using **Node.js** and **Express.js**.
- Exposes **RESTful APIs** for CRUD operations.
- **MySQL** database integration using the `mysql2` package.
- Environment variables (`dotenv`) to securely store database credentials.

---

## Prerequisites

Make sure the following are installed on your system:

- **Node.js** (version 12 or higher) - [Download Node.js](https://nodejs.org/)
- **MySQL** - [Download MySQL](https://www.mysql.com/)
- **npm** (comes with Node.js) - [Download npm](https://www.npmjs.com/)

---

## Installation and Setup

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Saadkhan0105/fullstack-crud-app.git
cd fullstack-crud-app
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

## Running the Backend Server:

In the backend directory, run the following command to start the server:

```bash
cd backend
npm start
```
The Backend will run on `http://localhost:8080`.

## Running the Frontend Application:
In the frontend directory, run the following command to start the application:
```bash
cd frontend
npm start
```

The application will be running on `http://localhost:3000`.

### Project Structure

## Backend(/backend)

- server.js: Entry point of the backend.
- routes/userRoutes.js: Defines API routes for user CRUD operations.
- controllers/userController.js: Contains business logic for user operations.
- .env: Contains environment variables for database connection credentials.
- package.json: Defines dependencies and scripts for the backend.

## Frontend(/frontend)

- src/components/: Contains React components such as Home, AddUser, and UserList.
- src/App.js: The main component that holds the structure of the frontend.
- src/index.js: Entry point of the frontend.
- src/App.css: Contains CSS styles for the frontend.
- package.json: Defines dependencies and scripts for the frontend.
- src/package-lock.json: Contains the exact version of the dependencies used in the frontend.

---
## API Endpoints

### Base URL: `http://localhost:8080`

| Method | Endpoint         | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/users`      | Fetch all users.         |
| POST   | `/api/users`      | Add a new user.          |
| PUT    | `/api/users/:id`  | Update a user by ID.     |
| DELETE | `/api/users/:id`  | Delete a user by ID.     |

---

## Technologies Used

Backend: 
- Node.js
- Express
- MySQL
- dotenv for environment variables

Frontend:
- React
- CSS

### Folder Structure
fullstack-crud-app/
├── backend/                # Node.js + Express backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Backend logic for user operations
│   ├── models/             # MySQL models
│   ├── routes/             # API routes for CRUD operations
│   ├── .env                # Environment variables (DB credentials)
│   └── server.js           # Main server file
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components for Add User, List Users, etc.
│   │   ├── App.js          # Main React app
│   │   ├── index.js        # App entry point
│   │   └── App.css         # Styling for frontend components
├── .gitignore              # Git ignore file
├── README.md               # Project instructions
└── package.json            # Project dependencies and scripts

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
