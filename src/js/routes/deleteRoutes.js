"use strict";

const { models } = require('../models');

const deleteRoutes = new Map();

for(const model of models) {
    if(model.name === 'Answer') {
        deleteRoutes.set('/delete' + model.name, async (req) => {
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
        deleteRoutes.set('/delete' + model.name, async (req) => {
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
        deleteRoutes.set(`/delete${model.name}`, async (req) => {
            await model.destroy({
                where: {
                    id: req.params.id
                }
            });
        })
    }
}

module.exports = {
    deleteRoutes
}
