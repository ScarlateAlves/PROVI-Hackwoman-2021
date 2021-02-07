const Controller = require('./controllers/usuario-controller')

module.exports = (app) => {
    app.post('/usuario', Controller.criarUsuario())
    app.get('/usuario', Controller.buscarUsuarios())
    app.delete('/usuario/:cpf', Controller.deletarUsuario())
    app.put('/usuario/:cpf', Controller.alterarUsuario())

}