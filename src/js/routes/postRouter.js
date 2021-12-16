"use strict";

const express = require('express');
const postRouter = express.Router();
const {models} = require('../models');

postRouter.post(`/newAnswer`, async (req, res) => {
    await models.Answer.create({
        text: req.body.text,
        date: req.body.date,
        Expert_id: req.body.expert,
        Question_id: req.body.question,
        SelectedAlt_id: req.body.alt,
    });
    res.send('{response: 1}');
});

postRouter.post(`/newUser`, async (req, res) => {
    await models.User.create({
        mail: req.body.mail,
        username: req.body.username,
    });
    res.send('{response: 1}');
});

postRouter.post(`/newExpert`, async (req, res) => {
    await models.Expert.create({
        job: req.body.job,
        User_id: req.body.id,
    });
    res.send('{response: 1}');
});

postRouter.post(`/newSurvey`, async (req, res) => {
    await models.Survey.create({
        text: req.body.text,
        type: req.body.type,
        topic: req.body.topic,
        date: req.body.date,
    });
    await models.SurveyAction.create({
        at: Date.now(),
        Survey_id: (await models.Survey.findAll()).length - 1,
        SurveyState_id: 3,
    });
    res.send('{response: 1}');
});

module.exports = {
    postRouter
};