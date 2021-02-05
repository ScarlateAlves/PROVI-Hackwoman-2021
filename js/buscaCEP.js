const CEP = document.querySelector('#inputCEP')

 const mostra = (resultado) => {
    for(const campo in resultado){
        if(document.querySelector("#input"+campo)){
            document.querySelector("#input"+campo).value = resultado[campo]
        }
    }
} 
 
CEP.addEventListener("blur", ()=>{
    const pesquisa = CEP.value.replace("-","")
    const opcoes = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, opcoes)
     .then((response) => {response.json()
        .then(data => mostra(data))})
     .catch((error) => {"Erro " + error})


}) 


