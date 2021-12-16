"use strict";

const express = require('express');
const { models } = require('./models');
const router = express.Router();
const routes = new Map();

for(const model of models) {
    routes.set('/get' + model.name + 's', model);
}

routes.forEach((model, route) => {
    console.log(model);
    router.get(`${route}`, async (req, res) => {
        const data = await model.findAll();
        res.send(data);
    })
})

router.get('/', (req, res) => {
    res.send('<h1>Router root</h1>');
});

module.exports = {
    router
};