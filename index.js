require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();

// middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rotas da API
const routesUniversity = require('./src/routes/routesUniversity')
app.use('/universities', routesUniversity)

app.get('/', (req, res) => {
    res.json({ message: "Olá, mundo!" })
})

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@apicluster.j0v0lu8.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectamos ao MongoDB!')
        app.listen(process.env.DB_PORT)
    })
    .catch((error) => {
        error.message
    })
