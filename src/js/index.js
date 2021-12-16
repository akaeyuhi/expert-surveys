"use strict";
const models = require('./models');
const sequelize = require('./connection');

(async () => {
    await sequelize.authenticate();
    const users = await models.User.findAll();
    const experts = await models.Expert.findAll();
    const answers = await models.Answer.findAll();
    users.map(user => console.log(`${user.username}, ${user.mail}`));
    experts.map(expert => console.log(`${expert.job}, ${expert.User_id}`));
    answers.map(answer => console.log(`${answer.text}, ${answer.date}, ${answer.SelectedAlt_id},`))
})();