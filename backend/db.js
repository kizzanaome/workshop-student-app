const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});


connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`, (err) => {
    if (err) throw err;
    console.log("Database ensured.");
    connection.end();
});
