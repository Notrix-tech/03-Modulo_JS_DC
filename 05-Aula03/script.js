function checkStatus(){
    event.preventDefault();
    let status = 0;
    switch(status__compra.value){
        case "Pago":
            document.getElementById("resultado").innerHTML = "Pedido Pago";
        break;

        case "Recusado":
            document.getElementById("resultado").innerHTML = "Pedido Recusado";
        break;

        case "Pedente":
            document.getElementById("resultado").innerHTML = "Pendente";
        break;
        
        case "Disputa":
            document.getElementById("resultado").innerHTML = "Disputa";
        break;

        default:
            document.getElementById("resultado").innerHTML = "Ocorreu um erro";
        break;
    }
}
function checkIdade(){
    event.preventDefault();
    let resultado = document.getElementById("resultado");
    let idd = Number(idade.value);
//ternário
//idd < 10 ? resultado.innerHTML = " É Criança" : resultado.innerHTML = " Não é criança";

(idd < 10 ) && (resultado.innerHTML = " É Criança");
(idd >= 10 && idd <= 18) && (resultado.innerHTML = " É Juvenil");
(idd > 18 && idd <=64) && (resultado.innerHTML = " É Adulto");
(idd > 65) && (resultado.innerHTML = " É Idoso");


}