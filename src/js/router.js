"use strict";

const express = require('express');
const router = express.Router();
const { models } = require('./models');
const { getRoutes, getHandler } = require('./routes/getRoutes');

getRoutes.forEach((model, route) => {
    router.get(`${route}`, async (req, res) => {
        res.send(await getHandler(model));
    });
    router.get(`${route}/:id`, async (req, res) => {
        res.send((await getHandler(model))[req.params.id - 1]);
    });
});

router.post(`/answer`, async (req, res) => {
    await models.Answer.create({
        text: req.body.text,
        date: req.body.date,
        Expert_id: req.body.expert,
        Question_id: req.body.question,
        SelectedAlt_id: req.body.alt,
    });
    res.send('{response: 1}');
});

router.post(`/user`, async (req, res) => {
    await models.User.create({
        mail: req.body.mail,
        username: req.body.username,
    });
    res.send('{response: 1}');
});

router.post(`/expert`, async (req, res) => {
    await models.Expert.create({
        job: req.body.job,
        User_id: req.body.id,
    });
    res.send('{response: 1}');
});

router.post(`/survey`, async (req, res) => {
    await models.Survey.create({
        text: req.body.text,
        type: req.body.type,
        topic: req.body.topic,
        date: req.body.date,
    });
    res.send('{response: 1}');
});

router.get('/', (req, res) => {
    res.send('<h1>Api root</h1>');
});

module.exports = {
    router
};