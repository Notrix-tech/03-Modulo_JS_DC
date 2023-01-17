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

//(idd < 10 ) && (resultado.innerHTML = " É Criança"); era assim

(idd < 12 ) && (document.getElementById("imagem").src = "https://www.ceducaf.com.br/uploads/media/141/A-CRIANCA%2C-O-LUDICO-E-O-PRAZER-DE-ENSINAR-E-APRENDER-NA-EDUCACAO-INFANTIL..jpg" );

(idd > 12 && idd <= 18) && (document.getElementById("imagem").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPsVmdO86x8qKpbENIKp60U3JSFHcsquVeIcT7jwoHOns2CRfYOboGNtc9ell3lPFy5o&usqp=CAU");
(idd > 18 && idd <=64) && (document.getElementById("imagem").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bkdG8kXDv9ydA-5Crsjhbgb7R8y2QynMYA&usqp=CAU");
(idd > 65) && (document.getElementById("imagem").src ="https://i.pinimg.com/236x/50/c2/d3/50c2d3fb69308262d5ef9b2a9b722629.jpg");

(idd < 12 ) && (Faixa_Etaria.innerHTML = "Criança"); 
(idd > 12 && idd <= 18) && (Faixa_Etaria.innerHTML = "Adolescente");
(idd > 18 && idd <=64) && (Faixa_Etaria.innerHTML = "Adulto");
(idd > 65) && (Faixa_Etaria.innerHTML = "idoso");


}