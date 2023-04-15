//
abrir.onclick = function(){
    lateral.classList.add('active');
}

let datatable = $("#table");
function buscarCategorias(){
    fetch('https://6439dfe890cd4ba563ef55bc.mockapi.io/Dashboard-cardapio/api/v1/categorias')
    .then(res => res.json())
    .then(lista => {

        datatable.DataTable({
            data: lista,
            columns: [
                { data: 'id'},
                { data: 'categoria'},
                { data: 'status'},
                { data: '',
                      render: function (data, type, row){
                        return `<ion-icon name="create"></ion-icon>
                                <ion-icon name="trash"></ion-icon>`;
                      }  
                }

            ]
        });
    })
}
buscarCategorias()

function cadastrarCategoria(){
    event.preventDefault();
    let dados = {
        categoria: categoria.value,
        status: statu.value,
    }
    fetch('https://6439dfe890cd4ba563ef55bc.mockapi.io/Dashboard-cardapio/api/v1/categorias', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(()=>{
        window.location.reload();
    })
}