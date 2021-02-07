class ModelOng {

    buscasDados(pa) {
        let nome = document.getElementById('no')
        nome.textContent = `Nome: ${pa[0].nome}`
        console.log(nome)
    }


}

module.exports = ModelOng