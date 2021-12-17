# Тестування працездатності системи


# Тестування працездатності системи
- `/api/get/[model.name]s/:id` - Отримати модель за ID
![](./getSurvey.png)

- `/api/get/getSurveyResult` - Отримати результат опитування для опитування за ID екперта та опитування

![](./getResult.png)

- `/api/get/getSurveyStats` - Отримати статистику для опитування за ID

![](./Stats.png)

- `/api/get/getInvitation` - Отримати запрошення для експерта за його ID

![](./Invitation.png)

- `/api/post/newSurvey` - Нове опитування (text, type, topic, date)

![](./postSurvey.png)

- `/api/put/updateSurvey` - Оновити дані про опитування (Survey_id, updateData: {object extends newSurveyData})

![](./putSurvey.png)
