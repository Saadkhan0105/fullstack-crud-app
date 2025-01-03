const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

// Initialize the app
const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
