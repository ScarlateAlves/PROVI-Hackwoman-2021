const { response } = require('express')
const bd = require('../infraestrutura/conexao')

class UsuarioDAO {


    static buscaUsuariosInBD(res) {
        const sql = 'SELECT * FROM USUARIO';
        bd.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }


    static criaUsuarioInBD(res, parametro) {
        const sql = 'INSERT INTO usuario (cpf, nome, email, senha, data_nascimento, genero, area_interesse,formacao, area_atuacao, sobre_usuario, github, linkedin, tipo_trabalho) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

        bd.query(sql, parametro, function(err, result) {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(result)
            }
        });
    };

    static deleteUsuarioInBD(res, parametro) {
        const sql = `DELETE FROM usuario WHERE cpf = ?`
        bd.query(sql, parametro, function(err, result) {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(result)
            }
        })
    }

    static alterarUsuarioINBD(res, parametro) {
        const sql = `UPDATE usuario SET  WHERE cpf = ? `
        bd.query(sql, parametros, function(err, result) {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(result)
            }
        })
    }

}
module.exports = UsuarioDAO