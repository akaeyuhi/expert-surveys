"use strict";
const express = require('express');
const { router } = require('./src/router');
const sequelize = require('./src/connection');

const app = express();

app.use(express.json());
app.use('/api', router);


app.get('/', (req, res) => {
    res.send('<h1>Database Coursework: RestFULL</h1>');
})

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    await sequelize.sync()
    console.log(`Server started on port ${port}`);
});