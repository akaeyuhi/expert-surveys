# Тестування працездатності системи


# Тестування працездатності системи
- `/api/get/[model.name]s/:id` - Отримати модель за ID
![](./getSurvey.PNG)

- `/api/get/getSurveyResult` - Отримати результат опитування для опитування за ID екперта та опитування

![](./getResult.PNG)

- `/api/get/getSurveyStats` - Отримати статистику для опитування за ID

![](./Stats.PNG)

- `/api/get/getInvitation` - Отримати запрошення для експерта за його ID

![](./InvitationPNG.PNG)

- `/api/post/newSurvey` - Нове опитування (text, type, topic, date)

![](./postSurvey.PNG)

- `/api/put/updateSurvey` - Оновити дані про опитування (Survey_id, updateData: {object extends newSurveyData})

![](./putSurvey.PNG)
