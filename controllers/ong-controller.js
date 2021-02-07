class ControllerGit {

    adiciona() {
       
        let nomePesquisa = document.getElementById('nome')

        let modelagem = new Usuario();

        modelagem.buscaDados(nomePesquisa.value)

        let visualiza = new ViewUsuario()
        visualiza.pesquisa(modelagem)

    }
}