const { response } = require('express')

const Usuario = require('../models/usuario.js')
const UsuarioDAO = require('../DAO/usuarioDAO')



class Controller {

    static buscarUsuarios() {
        return ((req, res) => {
            UsuarioDAO.buscaUsuariosInBD(res)
        })
    }

    static criarUsuario() {
        return (req, resp) => {
            let parametro = [req.body.cpf, req.body.nome, req.body.email, req.body.senha, req.body.data_nascimento, req.body.genero, req.body.area_interesse, req.body.formacao, req.body.area_atuacao, req.body.sobre_usuario, req.body.github, req.body.linkedin, req.body.tipo_trabalho]
            UsuarioDAO.criaUsuarioInBD(resp, parametro)
        }

    }


    static deletarUsuario() {
        return (req, resp) => {
            UsuarioDAO.deleteUsuarioInBD(resp, req.params.cpf)
        }
    }

    static alterarUsuario() {
        return ((req, resp) => {
            UsuarioDAO.alterarUsuarioINBD(resp, req.params.cpf)
        })
    }

    static autenticaUsuario() {
        return (async(req, resp) => {

            const usuario = await UsuarioDAO.autenticaUsuarioDAO(req.body.email)
            UsuarioDAO.autenticaUsuarioDAO(req.body.email)
            if (req.body.email === usuario.email) {
                resp.send('Você está logado!')
            } else {
                resp.send('Senha Incorreta!')
            }
        })
    }

}

module.exports = Controller