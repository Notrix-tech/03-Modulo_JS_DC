//
let lista =[];


//3passo- fazer a função para repetir essa função depois de inserir um aluno para poder fazer de novo...
function listarAlunos(){
    fetch("https://641b8d989b82ded29d5436ce.mockapi.io/api/v1/alunos")
    .then(res => res.json())
    .then(alunos =>{
        lista = alunos
        if(lista.length > 0){
            let tabela = document.querySelector("#tabela");
            tabela.innerHTML = "";//começa a tabela do zero
            for(let i = 0; i < lista.length; i++){
                tabela.innerHTML += ` <tr>
                                            <td>${lista[i].nome}</td>
                                            <td>${lista[i].email}</td>
                                            <td>${lista[i].telefone}</td>
                                            <td>${lista[i].cidade}</td>
                                            <td>
                                                    <button 
                                                    type="button"
                                                    data-bs-toggle="offcanvas" 
                                                    data-bs-target="#offcanvasRight_editar"
                                                    aria-controls="offcanvasRight_editar"
                                                    class="btn btn-success"
                                                    onclick="preencherForm(${lista[i].id})">Editar</button>
                                                    <button class="btn btn-danger" onclick="deletarAluno(${lista[i].id})">Deletar</button>
                                            </td>
                                        </tr>`;
                                    }
                                    return;
                alert("Nenhum aluno cadastrado")         
            } else{
                tabela.innerHTML = "";
                tabela.innerHTML += `<tr><td colspan="5" style="text-align: center; ">Nenhum Aluno cadastrado</td></tr>`
            }
        })
} listarAlunos()

function adicionarAluno(){
    event.preventDefault();
    //1passo-motar objeto para colocar no array
    let aluno = {
        nome: nome.value,//para pegar uma propriedade do input id do input .value
        email: email.value,
        telefone:telefone.value,
        cidade: cidade.value,

    }
    
    //lista.push(aluno);substituir pelo fetch
    fetch("https://641b8d989b82ded29d5436ce.mockapi.io/api/v1/alunos", {
        method: "POST",//O METODO PARA REQUISIÇÃO DE ENVIAR DADOS
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(aluno)//transforma objeto em texto para trafego na internet
    })
    .then(res => res.json())
    .then(resposta => {
        cadastro.reset();
    document.querySelector(".offcanvas").classList.remove("show");
    document.querySelector(".offcanvas-backdrop").classList.remove("show");
    listarAlunos();
    })
    
}
function preencherForm(posicao){
    let aluno = lista[posicao];
    e_id.value = posicao;
    e_nome.value = aluno.nome;
    e_email.value = aluno.email;
    e_telefone.value = aluno.telefone;
    e_cidade.value = aluno.cidade;
}

function editarAluno(){
    event.preventDefault();
    let posicao = e_id.value;
    lista[posicao].nome = e_nome.value;
    lista[posicao].email = e_email.value;
    lista[posicao].telefone = e_telefone.value;
    lista[posicao].cidade = e_cidade.value;
    editar.reset();
    document.querySelector(".offcanvas").classList.remove("show")
    document.querySelector(".offcanvas-backdrop").classList.remove("show")
    //3passo- Carregar a Lista
    listarAlunos()//5passo-chama de novo
}
function deletarAluno(posicao){
    fetch(`https://641b8d989b82ded29d5436ce.mockapi.io/api/v1/alunos/${posicao}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(resposta => {
        listarAlunos()
        alert(`Aluno de id ${posicao}  deletado`)
    })
    // let novaLista = [];
    // for(let i = 0; i < lista.length;i++){
    //     if(i != posicao){
    //         novaLista.push(lista[i]);
    //     }
    // }
    // lista = [];
    // lista = novaLista;
    // listarAlunos();
}
function pesquisar() {
    let lista_tr = document.querySelectorAll("tbody tr");
    if(busca.value.length >= 2){
        lista_tr.forEach((tr) => {
            if (tr.textContent.toLowerCase().search(busca.value.toLowerCase()) < 0 ) {
                tr.style.display = "none";
            }else{
                tr.style.display = "table-row";
            }
        });
    }else{
    console.log("teste")
        lista_tr.forEach((tr) => {
            tr.style.display = "table-row";
        })
    }
 
}
