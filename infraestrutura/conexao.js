const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost', 
    port:3306, 
    user: 'root',  
    password:'password' , 
    database: 'provi-woman'
})

module.exports = conexao