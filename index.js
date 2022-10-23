require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const routesUniversity = require('./src/routes/routesUniversity')
app.use('/universities', routesUniversity)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@apicluster.wcktuki.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to MongoDB!')
        app.listen(process.env.DB_PORT)
    })
    .catch((error) => {
        error.message
    })
