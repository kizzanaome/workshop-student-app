const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const mysql = require('mysql2');



require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

module.exports = pool.promise();


const students = [
  {
    name: "Alice",
    email: "alice@miu.edu",
    id: "S100"
  },
  {
    name: "Bob",
    email: "bob@miu.edu",
    id: "S101"
  },
  {
    name: "Carol",
    email: "carol@miu.edu",
    id: "S102"
  },
  {
    name: "David",
    email: "david@miu.edu",
    id: "S103"
  },
  {
    name: "Eve",
    email: "eve@miu.edu",
    id: "S104"
  },
  {
    name: "Frank",
    email: "frank@miu.edu",
    id: "S105"
  },
  {
    name: "Grace",
    email: "grace@miu.edu",
    id: "S106"
  },
  {
    name: "Hank",
    email: "hank@miu.edu",
    id: "S107"
  },
  {
    name: "Ivy",
    email: "ivy@miu.edu",
    id: "S108"
  },
  {
    name: "Jack",
    email: "jack@miu.edu",
    id: "S109"
  }
];


app.get('/health', async (req, res) => {
  res.send("I am OK.");
});

// app.get('/students', async (req, res) => {
//   res.send(students);
// });

// Get all students
app.get('/students', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM students');
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add a student
app.post('/students', async (req, res) => {
  const { name, email, id } = req.body;
  try {
    const [result] = await db.query('INSERT INTO students (name, email, id) VALUES (?, ?)', [name, email, id]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).send(err.message);
  }
});


const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Listening on ${port}`));