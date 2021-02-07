const express = require('express')
const app = express(); 
const routes = require('./router')
const Usuario = require('./models/usuario');
const bodyParser = require('body-parser')

module.exports = (app) =>  {



app.use(bodyParser.json()) 



const porta = 3000; 

routes(app)

app.listen(porta, () => console.log(`[Informação]: Servidor rodando na porta: ${porta}`) )

}