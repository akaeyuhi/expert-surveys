"use strict";

const express = require('express');
const router = express.Router();
const { getRoutes, getHandler } = require('./routes/getRoutes')

getRoutes.forEach((model, route) => {
    router.get(`${route}`, async (req, res) => {
        res.send(await getHandler(model));
    });
    router.get(`${route}/:id`, async (req, res) => {
        res.send((await getHandler(model))[req.params.id - 1]);
    });
});


router.get('/', (req, res) => {
    res.send('<h1>Router root</h1>');
});

module.exports = {
    router
};