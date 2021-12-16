"use strict";

const express = require('express');
const getRouter = express.Router();
const {models} = require('../models');
const {getRoutes, getHandler} = require("./getRoutes");


getRoutes.forEach((model, route) => {
    getRouter.get(`${route}`, async (req, res) => {
        res.send(await getHandler(model));
    });
    getRouter.get(`${route}/:id`, async (req, res) => {
        res.send((await getHandler(model))[req.params.id - 1]);
    });
});

getRouter.get('/getSurveyResult', async (req, res) => {
    console.log(req.body.expertId);
    const answers = await models.Answer.findAll({
        raw: true,
        attributes: ['Expert_id', 'Question_id', 'SelectedAlt_id'],
        where: {Expert_id: req.body.expertId}
    })
    const survey = await models.Survey.findOne({where: {id: req.body.surveyId}})
    const finalAnswers = await Promise.all(answers.map(async answer => {
        const question = await models.Question.findByPk(answer.Question_id);
        const alt = await models.Alt.findByPk((await models.SelectedAlt.findByPk(answer.SelectedAlt_id)).Alt_id);
        console.log(question, alt);
        return Object.assign(answer, {question, alt});
    }));
    const result = {
        survey,
        answers: finalAnswers
    }
    console.log(result);
    res.send(result);
});

module.exports = {
    getRouter
}