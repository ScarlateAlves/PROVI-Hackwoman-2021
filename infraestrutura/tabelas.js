const conexao = require('./conexao')

class Tabelas {

    init(conexao) {
        this.conexao = conexao
    }

    criarUsuario() {
        const sql = 'CREATE TABLE IF NOT EXISTS `usuario`(cpf varchar(11), nome varchar(100), email varchar(100), senha varchar(50), data_nascimento date, genero varchar(50), area_interesse varchar(100), formacao varchar(100), area_atuacao varchar(100), sobre_usuario varchar(250), github varchar(250), linkedin varchar(250), tipo_trabalho varchar(50));'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela >> Usuario<< criada com sucesso!')
            }
        })
    }

    criarOng() {
        const sql = 'CREATE TABLE IF NOT EXISTS ONG (nome varchar(100), segmento varchar(100), pretensao varchar(100));'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela >> ONG<< criada com sucesso!')
            }
        })
    }
}



module.exports = new Tabelas