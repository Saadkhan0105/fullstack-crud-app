import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the User Management Application</h2>
      <p>
        This application allows you to manage users by adding, updating, and
        deleting them. You can perform CRUD operations through the available
        options in the navigation menu.
      </p>
      <div className="intro-content">
        <h3>Features include:</h3>
        <ul>
          <li>Add new users</li>
          <li>View list of users</li>
          <li>Edit user details</li>
          <li>Delete users from the system</li>
        </ul>
      </div>
      <p>Feel free to explore and manage the users in the system!</p>
      <a href="/add-user" className="intro-btn">
        Start Managing Users
      </a>
    </div>
  );
};

export default Home;
