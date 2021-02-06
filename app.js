const express = require('express')
const app= express(); 
const routes = require('./router')

const porta = 3000; 

routes(app)

app.listen(porta, () => console.log(`[Informação]: Servidor rodando na porta: ${porta}`) )