import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<h1>Welcome to the CRUD App</h1>} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/list-users" element={<UserList />} />
    </Routes>
  </Router>
);

export default App;
