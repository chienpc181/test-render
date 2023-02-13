const express = require('express');
require('dotenv').config();

let app = express();
app.use(express.static('public'));

app.get('/test', async function (req, res, next) {
    try {
        res.send("hello");
    } catch (err) {
        next(err);
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })