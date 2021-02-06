const express = require('express')
const app = express(); 
const bodyParser = require('body-parser')
const routes = require('./router')
const Usuario = require('./models/usuario');

app.use(bodyParser)
const porta = 3000; 

routes(app)

app.listen(porta, () => console.log(`[Informação]: Servidor rodando na porta: ${porta}`) )