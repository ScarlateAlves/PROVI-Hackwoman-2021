const Controller = require('./controllers/usuario-controller')

module.exports = (app) => {
    app.post('/criarUsuario', Controller.criarUsuario())
    app.get('/listarUsuario', Controller.buscarUsuarios())
    app.delete('/deletar/:cpf', Controller.deletarUsuario())
    app.put('/alterar/:cpf', Controller.alterarUsuario())

}