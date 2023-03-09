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
                                    <button class="btn btn-success">Editar</button>
                                    <button class="btn btn-danger">Deletar</button>
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
    //2passo- Inserir o objeto dentro do arry lista .push
    lista.push(aluno);
    //3passo- Carregar a Lista
    listarAlunos()//5passo-chama de novo
}