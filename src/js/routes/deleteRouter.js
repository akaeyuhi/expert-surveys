"use strict";

const express = require('express');
const deleteRouter = express.Router();
const { models } = require('../models');

const routes = new Map();

for(const model of models) {
    if(model.name === 'Answer') {
        routes.set('/delete' + model.name, async (req) => {
            const answer = await models.Answer.findByPk(req.params.id);
            await models.SelectedAlt.destroy({
                where: {
                    id: answer.SelectedAlt_id
                }
            });
            await model.destroy({
                where: {
                    id: req.params.id
                }
            });
        });
    }
    else if(model.name === 'Survey') {
        routes.set('/delete' + model.name, async (req) => {
            await models.Survey.create({
                at: Date.now(),
                Survey_id: req.params.id,
                SurveyState_id: 4
            });
            await model.destroy({
                where: {
                    id: req.params.id
                }
            });
        });
    }
    else {
        routes.set(`/delete${model.name}`, async (req) => {
            await model.destroy({
                where: {
                    id: req.params.id
                }
            });
        })
    }
}



routes.forEach((cb, route) => {
    deleteRouter.delete(route, async (req, res) => {
        await cb(req);
        res.send('{response: 1}');
    })
})



module.exports = {
    deleteRouter
};