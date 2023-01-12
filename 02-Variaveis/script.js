 let container = document.getElementById("container");
// container.innerHTML= "ola div"
// let ovos = 4;
// let banana = 2;

// let soma = ovos + banana;
// container.innerHTML = soma;

// const manteiga = "300g"
// container.innerHTML = manteiga;
// manteiga = "500g";
// container.innerHTML = manteiga
// 

function imc(){

    event.preventDefault();
    let p = Number(peso.value);
    let a = Number(altura.value);

    let calculo = (p / (a * a)).toFixed(1);
    let resultado = document.getElementById("resultado");
    if(calculo < 18.5){
        resultado.innerHTML = "Abaixo do peso:" + calculo;
    }else if(calculo >= 18.5 && calculo <= 24.9){
        resultado.innerHTML = "Peso nomal:" + calculo;
    }else if(calculo >= 24.9 && calculo <= 29.9){
        resultado.innerHTML = "Sobrepeso :" + calculo;
    }else if(calculo >= 30 && calculo <= 35.9){
        resultado.innerHTML = "Obesidade grau 1 :" + calculo;
    }else if(calculo >= 35.9 && calculo <= 40){
        resultado.innerHTML = "Obesidade grau 2: " + calculo;
    }else{
        resultado.innerHTML = "Obesidade grau 3 :" + calculo;
    }
    

}