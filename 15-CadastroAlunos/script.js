//
let lista = [
    {
        nome: "Maria da silva ",
        email: "qualquercoisa@gmail.com",
        telefone: "(85) 987888799",
        cidade: "Fortaleza",
    },
    {
        nome: "Aruin lima ",
        email: "qualquercoisa@gmail.com",
        telefone: "(85) 987888799",
        cidade: "Eusebio",
    }, {
        nome: "jao da silva ",
        email: "qualquercoisa@gmail.com",
        telefone: "(85) 987888799",
        cidade: "Fortaleza",
    },
    {
        nome: "Hulk brokin ",
        email: "qualquercoisa@gmail.com",
        telefone: "(85) 987888799",
        cidade: "Fortaleza",
    },
    {
        nome: "Notrialc Oliveira ",
        email: "qualquercoisa@gmail.com",
        telefone: "(85) 987888799",
        cidade: "Brejo Santo",
    }
];
//3passo- fazer a função para repetir essa função depois de inserir um aluno para poder fazer de novo...
function listarAlunos(){

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
                                    onclik="preencherForm(${i})">Editar</button>
                                    <button class="btn btn-danger" onclik="deletarAluno">Deletar</button>
                               </td>
        
                                 </tr>`
    }
} listarAlunos();//chama uma vez

function adicionarAluno(){
    event.preventDefault();
    //1passo-motar objeto para colocar no array
    let aluno = {
        nome: nome.value,//para pegar uma propriedade do input id do input .value
        email: email.value,
        telefone:telefone.value,
        cidade: cidade.value,

    }
    
    lista.push(aluno);
    cadastro.reset();
    document.querySelector(".offcanvas").classList.remove("show")
    document.querySelector(".offcanvas-backdrop").classList.remove("show")
    
    listarAlunos()
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
    let novaLista = [];
    for(let i = 0; i < lista.length;i++){
        if(i != posicao){
            novaLista.push(lista[i]);
        }
    }
    lista = [];
    lista = novaLista;
    listarAlunos();
}