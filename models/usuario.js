const moment = require('moment')


class Usuario {
    constructor(cpf ,nome, email, senha, data_nascimento, genero, area_interesse, 
        formacao, area_atuacao, sobre_usuario, github, linkedin, tipo_trabalho){
        this.cpf = cpf; 
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.data_nascimento = data_nascimento;
        this.genero = genero; 
        this.area_interesse = area_interesse; 
        this.formacao = formacao; 
        this.area_atuacao = area_atuacao; 
        this.sobre_usuario = sobre_usuario; 
        this.github = github; 
        this.linkedin = linkedin; 
        this.tipo_trabalho = tipo_trabalho;  
    }
}



module.exports = Usuario