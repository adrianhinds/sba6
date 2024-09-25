import express from 'express';
import db from "./db.js";
const users = require("./data/users");
const message = require("./data/message");
const comments = require("./data/comments");

const app = express();
const Port = 3000;
// get requests
app.get("/api/users", (req, res) => {
    res.json(users);
  });
  app.get("/api/message", (req, res) => {
      res.json(message);
    });
    app.get("/api/comments", (req, res) => {
      res.json(comments);
    });

app.get('/', async (req, res) => {
    let collection = await db.collection('neighborhoods')
    let results = await collection.find().limit(5).toArray()
    console.log(results);
    res.json(results)
})

app.listen(Port, () => {
    console.log('Port is listening: ' + Port);
})