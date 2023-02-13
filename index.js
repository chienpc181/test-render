const express = require('express');
require('dotenv').config();

let app = express();
app.use(express.static('public'));

app.get('/', async function (req, res, next) {
    try {
        res.send("hello");
    } catch (err) {
        next(err);
    }
});

app.get('/test', async function (req, res, next) {
    try {
        res.json({name: 'chien'});
    } catch (err) {
        next(err);
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })