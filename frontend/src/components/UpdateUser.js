// src/components/UpdateUser.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateUser.css"; // Import specific CSS for UpdateUser component

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          alert("User updated successfully!");
          navigate("/list-users");
        } else {
          alert("Failed to update user.");
        }
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div className="update-user-container">
      <h2>Update User</h2>
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
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;
