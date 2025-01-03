const express = require("express");
const router = express.Router();
const db = require("../db/dbConnection");


router.post("/users", (req, res) => {
  const { name, email, password, dob } = req.body;
  const query =
    "INSERT INTO users (name, email, password, dob) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, password, dob], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res
      .status(201)
      .json({ message: "User added successfully", id: result.insertId });
  });
});


router.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
});


router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password, dob } = req.body;
  const query =
    "UPDATE users SET name = ?, email = ?, password = ?, dob = ? WHERE id = ?";
  db.query(query, [name, email, password, dob, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "User updated successfully" });
  });
});


router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "User deleted successfully" });
  });
});

module.exports = router;
