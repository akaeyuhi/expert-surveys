"use strict";

const express = require('express');
const { models } = require('./models');
const router = express.Router();
const routes = new Map();

for(const model of models) {
    routes.set('get' + model + 's', model);
}

routes.forEach((model, route) => {
    router.get(`/${route}`, async (res) => {
        const data = await model.findAll();
        console.log(data);
        res.send(data);
    })
})


module.exports = {
    router
};