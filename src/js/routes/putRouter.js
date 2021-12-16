"use strict";

const express = require('express');
const putRouter = express.Router();
const { models } = require('../models');

putRouter.put('/survey', async (req, res) => {
    if(!req.body.updateData) {
        res.send(JSON.stringify({
            error: "updateData is empty. Bad Request",
            code: "400"
        }))
        return;
    }
    const survey = models.Survey.findByPk(req.body.surveyId);
    await survey.update(req.body.updateData);
    res.send('{response: 1}')
});
