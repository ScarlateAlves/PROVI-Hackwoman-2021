const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const routes = require('./router')
const Usuario = require('./models/usuario');
const ModelOng = require('./models/model-ong')
const porta = 3000;

app.use(bodyparser.json())
routes(app)

const db = require('./infraestrutura/conexao');
const { response } = require('express');

app.get('/ong', (req, res) => {
    var sql = "select * from ONG"
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows[0]
        })
        let a = rows
        let ong = new ModelOng()
        ong.buscasDados(a)
    });

})


app.listen(porta, () => console.log(`[Informação]: Servidor rodando na porta: ${porta}`))