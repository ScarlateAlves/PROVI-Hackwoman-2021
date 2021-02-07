class ongView {
    pesquisa(x) {
        console.log("rederizando pagina")

        let nome = document.getElementById('no')
        let foto = document.getElementById('foto')
        let texto = document.getElementById('texto')


        nome.textContent = `Nome: ${x.getNome()}`
        foto.innerHTML = `<img src="${x.getImagem()}" alt="sem">`
        texto.innerHTML = "Quantidade de seguidores: " + x.getquantRepositorio()


    }
}