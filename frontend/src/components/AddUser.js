// src/components/AddUser.js
import React, { useState } from "react";
import "./AddUser.css"; // Import specific CSS for AddUser component

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          alert("User added successfully!");
          setUser({
            name: "",
            email: "",
            password: "",
            dob: "",
          });
        } else {
          alert("Failed to add user.");
        }
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div className="add-user-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={user.dob}
            onChange={(e) => setUser({ ...user, dob: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
