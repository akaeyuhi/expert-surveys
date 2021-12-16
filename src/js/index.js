"use strict";
const express = require('express');
const { router } = require('./router');

const app = express();

app.use(express.json());
app.use('/api', router);


app.get('/', (req, res) => {
    res.send('<h1>Database Coursework: RestFULL</h1>');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});