const {response} = require('express')
const bd = require('../infraestrutura/conexao')

class UsuarioDAO {

    static async buscaUsuariosInBD(resp){

        const sql = 'SELECT * FROM usuario'
        await bd.query(sql , (err, rows) => {
                err ? err : console.log(rows)
        })
    }

    static async criaUsuarioInBD(resp, req){
        const sql = `INSERT INTO usuario (cpf, nome, senha, data_nascimento, genero, area_interesse,
             formacao, area_atuacao, sobre_usuario, github, linkedin, tipo_trabalho) 
             VALUES ('','', '', '', '', '', '', '', '', '', '', '')`

        await bd.query(sql, function (err, result) {
          err ? err : console.log("Usuário inserido com sucesso!" + result);
        });
      };
    
    static async deleteUsuarioInBD(cpf, resp, req){
        const sql = `DELETE FROM usuario WHERE cpf = ${cpf}`
        await bd.query(sql, function(err, result){
            err ? err : resp.send("Usuário deletado com sucesso!" )
        })
    }

    static async alterarUsuarioINBD(cpf){
        const sql = `UPDATE usuario SET nome = 'Nane' WHERE cpf = ${cpf}? `
        await bd.query(sql, function(err, result){
            err ? err : console.log("Usuário alterado com sucesso!")
        })
    }
    
}


 
module.exports = UsuarioDAO