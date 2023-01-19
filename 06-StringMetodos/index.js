function ContaPalavras(){

    let t = texto.value;
    let arrayDoTexto = t.split(" ")
    let resultadoDaPesquisa = 0;
    arrayDoTexto.array.forEach(palavra => {
        if(palavra == busca.value){
            resultadoDaPesquisa++;
        }
    });
    alert(resultadoDaPesquisa > 0 ? (resultadoDaPesquisa + " palavras"): "Não encontrei essa palavra")
    }
