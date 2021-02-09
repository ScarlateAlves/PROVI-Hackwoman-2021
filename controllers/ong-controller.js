class ControllerGit {

    adiciona() {

        let nomePesquisa = document.getElementById('nome')

        let modelagem = new model();

        modelagem.buscasDados(nomePesquisa)

        let visualiza = new ongView()
        visualiza.pesquisa(modelagem)

    }


}

module.exports = (app) => {
    app.get('/usuario', Controller.buscarUsuarios())




}