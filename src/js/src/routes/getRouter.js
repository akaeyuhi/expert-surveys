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
    res.send(result);
});

getRouter.get('/getSurveyStats', async (req, res) => {
    const survey = await models.Survey.findByPk(req.body.surveyId);
    const questions = await models.Survey.findAll({
        raw: true,
        where: {
            id: survey.id
        }
    });
    const answers = (await Promise.all(questions.flatMap(async q => {
        return await models.Answer.findAll({
            raw: true,
            where: {
                Question_id: q.id
            }
        })
    })))[0];
    const experts = new Set(answers.map(a => a.Expert_id));
    const result = {
        "SurveyStats": survey,
        "answer_count": answers.length,
        "questions_count": questions.length,
        "experts_answered": experts.size,
        "extended_data": {
            answers,
            questions,
            experts: await models.Expert.findAll({
                where: {
                    id: [...experts]
                }
            })
        },
    };
    res.send(result);
});

module.exports = {
    getRouter
}