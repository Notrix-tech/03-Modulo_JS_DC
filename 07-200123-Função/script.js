/*
função tem retorno ou nao.
*/ 
function boasVindas(){
    console.log("Seja bem vindo")
}
boasVindas()

function somar(v1, v2){
    let soma = v1 + v2
    return soma;
}
console.log(somar(30,10))

function boasVindas(nome = "Clairton"){
    if(nome == ""){
        return "Seja bem vindo";
    }else{
        return "Olá está sem nome";
    }
   
}
/**
 * Usar decoration
 */
function saudacao(nome = ""){
    return  (nome = ""? " Esvreva sem nome": "Olá mundo JS sem nome")
}
console.log(saudacao.nome)
