# Реалізація інформаційного та програмного забезпечення
- SQL-скрипт для створення на початкового наповнення бази даних:
```sql
-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`User`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (1, 'user1', 'user1@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (2, 'user2', 'user2@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (3, 'user3', 'user3@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (4, 'user4', 'user4@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (5, 'user5', 'user5@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (6, 'user6', 'user6@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (7, 'user7', 'user7@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (8, 'user8', 'user8@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (9, 'user9', 'user9@mail.com');
INSERT INTO `ExpertSurveys`.`User` (`id`, `username`, `mail`) VALUES (10, 'user10', 'user10@mail.com');

COMMIT;

-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Alt`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (1, 'minmax', '4');
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (2, 'select', 'select5');
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (3, 'radiobutton', '3');
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (4, 'select', 'select2');
INSERT INTO `ExpertSurveys`.`Alt` (`id`, `type`, `text`) VALUES (5, 'minmax', '3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Expert`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (1, 'job1', 1);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (2, 'job1', 2);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (3, 'job2', 3);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (4, 'job3', 4);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (5, 'job2', 5);
INSERT INTO `ExpertSurveys`.`Expert` (`id`, `job`, `User_id`) VALUES (6, 'job1', 6);

COMMIT;


-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`SelectedAlt`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (1, 2);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (2, 1);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (3, 3);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (4, 4);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (5, 4);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (6, 2);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (7, 5);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (8, 1);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (9, 2);
INSERT INTO `ExpertSurveys`.`SelectedAlt` (`id`, `Alt_id`) VALUES (10, 5);

COMMIT;


-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Survey`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (1, 'text1', 'typ1', 'topic1', '1970-01-01');
INSERT INTO `ExpertSurveys`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (2, 'text2', 'type2', 'topic1', '1970-01-01');
INSERT INTO `ExpertSurveys`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (3, 'text3', 'type3', 'topic2', '1970-01-01');

COMMIT;



-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`SurveyState`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`SurveyState` (`id`, `name`) VALUES (1, 'Done');
INSERT INTO `ExpertSurveys`.`SurveyState` (`id`, `name`) VALUES (2, 'Progress');
INSERT INTO `ExpertSurveys`.`SurveyState` (`id`, `name`) VALUES (3, 'Checking');

COMMIT;

-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`SurveyAction`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`SurveyAction` (`id`, `at`, `Survey_id`, `SurveyState_id`) VALUES (1, '1970-01-01', 1, 1);

COMMIT;

-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Question`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (1, 'type1', 'Question1', 1);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (2, 'type1', 'Question2', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (3, 'type2', 'Question3', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (4, 'type1', 'Question4', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (5, 'type4', 'Question5', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (6, 'type5', 'Question6', 2);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (7, 'type2', 'Question7', 1);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (8, 'type6', 'Question8', 1);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (9, 'type5', 'Question9', 1);
INSERT INTO `ExpertSurveys`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (10, 'type5', 'Question10', 3);

COMMIT;

-- -----------------------------------------------------
-- Data for table `ExpertSurveys`.`Answer`
-- -----------------------------------------------------
START TRANSACTION;
USE `ExpertSurveys`;
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (1, 'text1', '1970-01-01', 1, 1, 1);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (2, 'text2', '1970-01-01', 1, 2, 3);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (3, 'text3', '1970-01-01', 2, 1, 5);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (4, 'text4', '1970-01-01', 2, 2, 5);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (5, 'text5', '1970-01-01', 3, 2, 5);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (6, 'text6', '1970-01-01', 4, 1, 5);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (7, 'text7', '1970-01-01', 4, 2, 1);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (8, 'text8', '1970-01-01', 5, 1, 1);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (9, 'text9', '1970-01-01', 5, 2, 2);
INSERT INTO `ExpertSurveys`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (10, 'text10', '1970-01-01', 6, 1, 4);

COMMIT;
```
Source: ../src/sql/main.sql
- RESTfull сервіс для управління даними
```js 
"use strict";
const express = require('express');
const { router } = require('./src/router');
const sequelize = require('./src/connection');

const app = express();

app.use(express.json());
app.use('/api', router);


app.get('/', (req, res) => {
    res.send('<h1>Database Coursework: RestFULL</h1>');
})

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    await sequelize.sync()
    console.log(`Server started on port ${port}`);
});
```
Повний код проекту та роутерів: ../src/js
### Опис кінцевих точок RESTfull сервісу доступу до даних
#### GET
- `/api/get/[model.name]s` - Отримати список всіх данних моделі
- `/api/get/[model.name]s/:id` - Отримати модель за ID
- `/api/get/getInvitation` - Отримати запрошення для експерта за його ID
- `/api/get/getSurveyStats` - Отримати статистику для опитування за ID
- `/api/get/getSurveyResult` - Отримати результат опитування для опитування за ID екперта та опитування
#### POST
- `/api/post/newUser` - Створити користувача (username, mail)
- `/api/post/newExpert` - Створити нового експерта (job, User_id)
- `/api/post/newAction` - Нова дія для опитування(Survey_id, [Стан: 'Done' | 'Progress' | 'Checking' 'Deleted' ])<br>
*При створенні нового опитування створюється Action Checking*
- `/api/post/newAnswer` - Нова відповідь на опитування (text, date, Expert_id, Question_id, SelectedAlt_id)
- `/api/post/newSurvey` - Нове опитування (text, type, topic, date)
#### PUT
- `/api/put/updateSurvey` - Оновити дані про опитування (Survey_id, updateData: {object extends newSurveyData})
- `/api/put/updateAction` - Змінити статус опитування(object extends newAction)
#### DELETE 
- `/api/delete/[model.name]/:id` - Видалити модель з бази за id <br>
**ОКРІМ** 
```js
const restricted = [
    'Expert',
    'Survey',
    'Question',
    'SurveyState',
    'SelectedAlt',
    'Alt',
];
```
[Тестування працездатності системи](https://akaeyuhi.github.io/expert-surveys/test/)

