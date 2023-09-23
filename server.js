"use strict";

const express = require("express");
// const { Pool, Client } = require("pg");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";
// const people = [
//   { name: "Aaron", age: 10 },
//   { name: "Brian", age: 20 },
//   { name: "Chris", age: 30 },
//   { name: "David", age: 40 },
//   { name: "Elvis", age: 50 },
// ];

// App
const app = express();

// Database
// const client = new Client({
//   user: "user",
//   host: "postgres",
//   database: "db",
//   password: "pass",
//   port: 5432,
// });
// client.connect();

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

// app.get("/initialize", (req, res) => {
//   client.query(
//     `DROP TABLE IF EXISTS person;` +
//       `CREATE TABLE person  (
//     id serial,
//     name varchar(10) NOT NULL,
//     age integer NOT NULL
//   )`,
//     (error, result) => {
//       if (error) {
//         throw error;
//       }
//       res.status(204).send("Created table 'person'");
//     }
//   );
// });

// app.get("/populate", (req, res) => {
//   client.query(
//     "INSERT INTO person (name, age) VALUES" +
//       people.map((person) => ` ('${person.name}', ${person.age})`).join(","),
//     (error, result) => {
//       if (error) {
//         throw error;
//       }
//       res.status(201).send(`Inserted ${result.rowCount} people`);
//     }
//   );
// });

// app.get("/users", (req, res) => {
//   client.query("SELECT * FROM person;", (error, result) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).send(result.rows);
//   });
// });

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
