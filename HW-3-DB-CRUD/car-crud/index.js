const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "csc226carsdb", // Updated to the new database name
    password: "mypassword", // Replace with your PostgreSQL password
    port: 5432,
  });
  

// Routes

// CREATE: Add a new car
app.post("/cars", async (req, res) => {
  const { make, model, year } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO Cars (make, model, year) VALUES ($1, $2, $3) RETURNING *",
      [make, model, year]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// READ: Get all cars
app.get("/cars", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Cars");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// UPDATE: Update a car by ID
app.put("/cars/:id", async (req, res) => {
  const { id } = req.params;
  const { make, model, year } = req.body;
  try {
    const result = await pool.query(
      "UPDATE Cars SET make = $1, model = $2, year = $3 WHERE id = $4 RETURNING *",
      [make, model, year, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// DELETE: Delete a car by ID
app.delete("/cars/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM Cars WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
