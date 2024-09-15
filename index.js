import express from 'express'
import 'dotenv/config'
import connectDb from './db.js'
const Port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(Port, () => {
    console.log('Port is listening: ' + Port)
    connectDb()
})