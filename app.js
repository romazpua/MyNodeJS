// подключение express
const express = require('express')

// создаем обьект приложения
const app = express()

// определяем обработчик для маршрута "/"
app.get("/", function (request, response){

    // оправляем ответ
    response.send("<h2>Hello Express!</h2>")
})
// начинаем прослушивать подключения на 3000 порту
app.listen(3000)