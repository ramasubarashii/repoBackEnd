const express = require ('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// routing
// app.method(path, handler);
app.get("/", (req, res) => {
    res.send("hello world");
})

app.get("/name", (req, res) => {
    console.log({urlParam: req.query})
    res.send("hello world bro");
})

app.put('/username', (req, res) => {
    console.log({updateData: req.body})
    res.send('update berhasil')
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside : req.body })
    res.send('login berhasil')
})

// app.listen(port, () => {
app.listen (port, () => {
    console.log (`server running on port ${port}`);
})
