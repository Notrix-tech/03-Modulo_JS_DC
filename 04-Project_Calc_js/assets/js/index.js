//document.write("Olá Mundo JavaScript")
//document.getElementById(container).innerHTML="<h1>Clairton Lima</h1>"
//document.querySelector("#container").innerHTML="<h2>Outra Coisa</h2>";
//document.querySelector(".direita").innerHTML="<h2>Inserindo outra coisa</h2>"

//let paragrafo = document.createElement("p");
//paragrafo.append("Inserindo com Append()");
//document.getElementById("container").appendChild(paragrafo);

function somar(){
let soma = Number(valor1.value) + Number(valor2.value);
document.getElementById("resultado").innerHTML= "<h4>Resultado é: "+ soma +"</h4>";
}
function subtrair(){
    let subtrair = Number(valor1.value) - Number(valor2.value);
    document.getElementById("resultado").innerHTML= "<h4>Resultado é: "+ subtrair +"</h4>";
}
function multiplicar(){
    let multiplicar = Number(valor1.value) * Number(valor2.value);
    document.getElementById("resultado").innerHTML= "<h4>Resultado é: "+ multiplicar +"</h4>";
}
function dividir(){
    let dividir = Number(valor1.value) / Number(valor2.value);
    document.getElementById("resultado").innerHTML= "<h4>Resultado é: "+ dividir +"</h4>";
}