const Controller = require('./controllers/usuario-controller')
const UsuarioDAO = require('./DAO/usuarioDAO')
module.exports = (app) => {
    app.post('/usuario', Controller.criarUsuario())
    app.get('/usuario', Controller.buscarUsuarios())
    app.delete('/usuario/:cpf', Controller.deletarUsuario())
    app.put('/usuario/:cpf', Controller.alterarUsuario())
    app.get('/autenticacao/:email', Controller.autenticaUsuario())



}