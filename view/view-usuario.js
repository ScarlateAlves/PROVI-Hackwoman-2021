class ViewUsuario {

    pesquisa(x) {
  

        let nome = document.getElementById('no')
        let foto = document.getElementById('foto')
        let texto = document.getElementById('texto')
        let texto6 = document.getElementById('texto6')
        let texto2 = document.getElementById('texto2')
        let texto3 = document.getElementById('texto3')
        let texto4 = document.getElementById('texto4')
        let texto5 = document.getElementById('texto5')

        nome.textContent = `Nome: ${x.getNome()}`
        foto.innerHTML = `<img src="${x.getImagem()}" alt="sem">`
        texto.innerHTML = "Quantidade de seguidores: " + x.getquantRepositorio()

    }
}