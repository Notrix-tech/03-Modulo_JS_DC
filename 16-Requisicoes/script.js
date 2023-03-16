// function buscaCEP(){
//     if(cep.value.length == 8){
//         console.log(cep.value); vai chamar a requisição com a função: fetch e then para resolver a promise
//     }
   // (()=>{
   //    console.log("Função auto contida e autoexecutavel")
   // })()

   

// }

(()=>{
   fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
   .then(res => res.json())
   .then(estados => {
      estados.forEach(item => {
         estado.innerHTML += `<option value="${item.sigla}">${item.nome}</option>`
      });
   })
})()

function buscaCEP(){
        if(cep.value.length == 8){
        fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        .then(response => response.json())
        .then(dados => {
           endereco.value = dados.logradouro;
           bairro.value = dados.bairro;
           cidade.value = dados.localidade;
           estado.value = dados.uf;
        })
     }
       
 }