"use strict";

const express = require('express');
const putRouter = express.Router();
const { models } = require('../models');

putRouter.put('/updateSurvey', async (req, res) => {
    if(!req.body.updateData) {
        res.send(JSON.stringify({
            error: "updateData is empty. Bad Request",
            code: "400"
        }))
        return;
    }
    const survey = await models.Survey.findByPk(req.body.surveyId);
    await survey.update(req.body.updateData);
    res.send('{response: 1}')
});

putRouter.put('/updateStatus', async (req, res) => {
    if(!req.body.updateData) {
        res.send(JSON.stringify({
            error: "updateData is empty. Bad Request",
            code: "400"
        }))
        return;
    }
    const status = await models.SurveyAction.findOne({
        where: {
            Survey_id: req.body.surveyId
        }
    });
    await status.update(req.body.updateData);
    res.send('{response: 1}')
});

module.exports = {
    putRouter
};