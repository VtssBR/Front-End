const vagas= []

function Menu(){
    opcao = prompt("Escolha uma das opçoes: \n"+
    "1- Listar  vagas diponiveis\n"+
    "2- Criar uma vaga\n"+
    "3- Visualizar uma vaga\n"+
    "4- Inscrever um candidato em uma vaga\n"+
    "5- Excluir uma vaga\n"+
    "6- Sair")
    return opcao
}

function listar(){
    const vagasEmtexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + "- "
        textoFinal += vaga.nome
        textoFinal +=" (" + vaga.candidatos.length + "candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmtexto)
} 
    


function criar(){
    const nome = prompt("Insira um titulo para vaga: \n")
    const descricao = prompt("Insira uma descrição para a vaga: \n")
    const data = prompt("Insira a data limite: \n")
    const confirmacao= confirm(
        "Deseja confirmar os dados ?:\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + data
    )
    
    if (confirmacao) {
        const novaVaga = {nome, descricao, data, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso")
    }  
}
