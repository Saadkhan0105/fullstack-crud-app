import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/add-user">Add User</Link>
    <Link to="/list-users">List Users</Link>
  </nav>
);

export default Navbar;
