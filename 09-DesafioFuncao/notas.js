//
let botao = document.getElementById("exc")
botao.addEventListener("click", function(evento){
    evento.preventDefault()
    documento.write(" A média é " + mediaPonderada(Number(n1.value),Number(n2.value), Number(n3.value)))
})

function mediaPonderada(t1, p1, p2){
    let media = ((t1*2 + p1 + p2))/4;
    return ` A media do aluno é ${media.toFixed(2)}`;

}
mediaPonderada(8,8,8)
console.log(mediaPonderada(8,8,8))