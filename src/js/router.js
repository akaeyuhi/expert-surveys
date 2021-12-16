"use strict";

const express = require('express');
const router = express.Router();
const { getRouter } = require('./routes/getRouter');
const { postRouter } = require('./routes/postRouter');
const { putRouter } = require('./routes/putRouter');

router.use('/get', getRouter);
router.use('/post', postRouter);
router.use('/put', putRouter);

router.get('/', (req, res) => {
    res.send('<h1>Api root</h1>');
});

module.exports = {
    router
};