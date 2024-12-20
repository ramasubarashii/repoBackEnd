const express = require ('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

// routing
// app.method(path, handler);
app.get("/", (req, res) => {
    db.query("select * from nama_mahasiswa", (err, results) => {
        // hasil data dari mysql
        response(200, results,"get all data from mahasiswa", res)
        })
})

app.get("/find", (req, res) => {
    const sql = `select * from nama_mahasiswa where npm = '${req.query.npm}'`
    console.log('find npm: ', req.query.npm)
    db.query(sql, (err, results) => {
        response(200, results, "find data from mahasiswa", res)
    })
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
