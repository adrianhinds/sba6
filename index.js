import express from 'express'
const Port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(Port, () => {
    console.log('Port is listening: ' + Port)
})