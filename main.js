const citiesController = require("./cities.controller");
const errorMiddleware = require("./error-handler.middleware");
const express =  require('express')
const app = express()

app.use(express.urlencoded({extended: false}))

app.use("/cities", citiesController);

app.listen(3000)
app.use(errorMiddleware);