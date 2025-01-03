import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Date of Birth
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {user.id}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {user.name}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {user.email}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {formatDate(user.dob)}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                  style={{
                    padding: "5px 10px",
                    marginRight: "10px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:8080/api/users/${id}`);
        setUsers(users.filter((user) => user.id !== id));
        alert("User deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };
};

export default UserList;
