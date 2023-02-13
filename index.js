const express = require('express');
const { getPublicToken } = require('./services/aps.js');
const cors = require('cors');
require('dotenv').config();

let app = express();
app.use(express.static('public'));
app.use(cors());

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

app.get('/auth/token', async function (req, res, next) {
    try {
        res.json(await getPublicToken());
    } catch (err) {
        next(err);
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })