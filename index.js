import express from 'express';
import db from "./db.js";

const app = express();
const Port = 3000;


app.get('/', async (req, res) => {
    let collection = await db.collection('neighborhoods')
    let results = await collection.find().limit(5).toArray()
    console.log(results);
    res.json(results)
})

app.listen(Port, () => {
    console.log('Port is listening: ' + Port);
})