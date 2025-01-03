import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserList.css"

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("User deleted successfully!");
          setUsers(users.filter((user) => user.id !== id));
        } else {
          alert("Failed to delete user.");
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.dob).toLocaleDateString()}</td>
              <td>
                <Link to={`/update/${user.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-user">
        <button>Add User</button>
      </Link>
    </div>
  );
}

export default UserList;
