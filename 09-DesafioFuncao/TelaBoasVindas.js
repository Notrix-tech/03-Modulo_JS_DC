/**
 * 1 - (SR, SP) Um novo aluno chamado “Thiago” chegou em nossa turma, Crie uma função
que escreva na tela as boas vindas ao novo colega;
 */
function boasVindas(){
    //const boasVindas = document.getElementById("boasVindas").innerHTML= "";
    const resultado = document.getElementById("resultado").innerHTML= "Seja Bem-vindo a turma fs09/fs10";
    
}
// function subtrair(){
//     let subtrair = Number(valor1.value) - Number(valor2.value);
//     document.getElementById("resultado").innerHTML= "<h4>Resultado é: "+ subtrair +"</h4>";
// }
// function subtIdade(valor){
//     //let input = input.value1
//     let idade= 2023 - Input.valor1
//     return 2023 - idade;
//     const resultado = document.getElementById("resultado").innerHTML= "";
// }
// console.log(idade)

// function idade(anoBissexto) {
//     var ano = new Date().getFullYear();
//     var idade = ano - anoBissexto;
//     return idade;
//   }

//   /* associe ao input */
// var input = document.createElement('input');
// input.type = 'number';
// input.value = idade(anoBissexto);
// document.body.appendChild(input);

var ano = document.getElementById('ano');
var btn = document.getElementById('btn');
var resultado = document.getElementById('resultado');
btn.addEventListener('click', function(){
    var anoNascimento = ano.value;
    var idade = 2020 - anoNascimento;
    resultado.innerHTML = idade;
});