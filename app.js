const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const routes = require('./router')
const Usuario = require('./models/usuario');

const porta = 3000;

app.use(bodyparser.json())
routes(app)

app.listen(porta, () => console.log(`[Informação]: Servidor rodando na porta: ${porta}`))