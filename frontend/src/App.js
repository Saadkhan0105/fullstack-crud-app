// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import Home from "./components/Home"; // Import Home component
import "./App.css"; // Global CSS file

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-user">Add User</Link>
            </li>
            <li>
              <Link to="/list-users">List Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/list-users" element={<UserList />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
