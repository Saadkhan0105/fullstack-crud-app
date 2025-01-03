import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users", user);
      alert("User added successfully");
      setUser({ name: "", email: "", password: "", dob: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={user.password}
        onChange={handleChange}
      />
      <input
        name="dob"
        placeholder="Date of Birth"
        type="date"
        value={user.dob}
        onChange={handleChange}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
