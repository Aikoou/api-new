const { request } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

const {getCookies} = require("./сontrollers/cookie")
app.get("/get-cookes", getCookies)

const {getCookes} = require("./сontrollers/recept")
app.get("/get---cookes", getCookes)

const {createRecept} = require("./сontrollers/recept")
app.post ('/creat-recept', createRecept)

const {allRecept} = require("./сontrollers/recept")
app.get('/all-recept', allRecept)

const {getnews} = require("./сontrollers/news")
app.get("/get-news", getnews)

const {deleteNews} = require("./сontrollers/news")
app.delete("/delete-news/:newsId", deleteNews)

const PORT = 5050;

app.listen(PORT, () => {
    console.log("Бэкенд приложение запущена на порту:" + PORT)
});