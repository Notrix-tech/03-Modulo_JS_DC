// let arr = [1,2,4,5]
// let nomes = ['Cla', 'Joa', ]
// let bool = [true, false, true]
// let mistrurado = [1, 3, "clairton", true, "joao"]

// console.log(arr)
// console.log(nomes)
// console.log(bool)
// console.log(mistrurado)

// console.log(arr[4])//saber a posiçao do array
// console.log(arr[arr.length-1])//saber o ultimo elemnto do array

let meses=[
    "Janeiro", 'Fevereiro','Março','Abril','Maio','Junho','julho','Agosto', 'Setembro','Outubro','Novembro','Dezembro'

];
// Laço do dia

//Laço do mês
for(let i = 0; i < meses.length; i++){
    document.getElementById("escolherMes").innerHTML += (`<option>${meses[i]}</option>`)
}

// // Laço do ano
for(let i = 2023; i >= 1923; i--){
    document.getElementById("escolherAno").innerHTML += (`<option>${i}</option>`)
}

function mesEscolhido(){
    let mes= escolherMes.value;
    let ano = escolherAno.value;


    document.getElementById("escolherDia").innerHTML =""

    if(mes == "Fevereiro"){
        if((ano % 4 == 0) && (ano % 100 == 0) && (ano % 400 == 0)){
            gerarDias(29);
            return;
        }
        gerarDias(28)

        }
    }
    
    if(mes == "Abril" || mes == "Junho" || mes == "Setembro" || mes=="Novembro"){

    }

function gerarDias(dias){
    for(let i = 1; i<=dias; i++){
        document.getElementById("escolherDia").innerHTML += (`<option>${i}</option>`)
    }
}