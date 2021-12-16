"use strict";

const express = require('express');
const { deleteRoutes } = require('./deleteRoutes');
const deleteRouter = express.Router();


deleteRoutes.forEach((cb, route) => {
    deleteRouter.delete(route, async (req, res) => {
        await cb(req);
        res.send('{response: 1}');
    })
})


module.exports = {
    deleteRouter
};