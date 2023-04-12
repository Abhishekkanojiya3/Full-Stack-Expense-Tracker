const Sequelize = require('sequelize')
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const expenseRoutes = require('./routes/expense')
const Expense = require('./models/expense')

const express = require('express')
var cors = require('cors')
const app = express();
app.use(cors())

app.use(bodyParser.json({ extended: false }));

app.use(expenseRoutes)

sequelize
    .sync().then((result) => {
        app.listen(5000)
            //    console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })