const Controller = require('./controllers/usuario-controller')

module.exports = (app) => {
    app.post('/criarUsuario', Controller.criarUsuario())
    app.get('/listarUsuario', Controller.buscarUsuarios())
    app.delete('/deletar/:id', Controller.deletarUsuario())
    app.put('/alterar/:id', Controller.alterarUsuario())

}