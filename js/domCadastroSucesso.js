const corpoPagina = document.getElementsByTagName('body')
const head = document.querySelector('head')
const botao = document.getElementById('btnConcluir')


botao.addEventListener("click", () => {

    head.innerHTML = ` <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="../css/cadastroSucesso.css"  rel="stylesheet">
    <title>Bem vindx!</title>`



    corpoPagina.innerHTML =
        `<img src="../imagens/sucesso.png">
    <h1>Cadastro concluído com sucesso!</h1>
    <h3>Estamos feliz em ter você como membro do Conecta</h3>
    <a href="../html/login.html">
        <button>Fazer login</button>
    </a>



    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
    integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"
    integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>`
})