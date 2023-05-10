const vagas= []

function menu(){
    opcao = prompt(
    "VAGAS DE EMPREGOS \n" +

    "Escolha uma das opçoes: \n"+
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
    const data = prompt("Insira a data limite:(dd/mm/aaaa) \n")
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

function visualizar(){
    const indice = prompt("Insira o indice da vaga para busca-la: \n")
    if(indice >= vagas.length || indice < 0) {
        alert("Indice Invalido")
        return
    }

    const vaga = vagas[indice]
    const candidatosEmTexto = vagas.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição" + vaga.descricao +
        "\nData Limite: " + vaga.data +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos incritos: " + candidatosEmTexto 
    )
}

function inscrever() {
    const candidato = prompt("Insira o nome do(a) candidato(a): ")
    const indice = prompt("Informe o indice da vaga para qual o(a) candidato(a) deseja se increver: ")
    const vaga = vagas[indice]

    const confirmacao = confirm (
        "Deseja confirmar os dados: \n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.data 
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada")
    }
}

function excluir(){
    const indice = prompt("Insira o indice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.data 
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluida com sucesso.")
    }
}

function executar(){
    let opcao = ""

    do{
        opcao = menu()

        switch(opcao) {
            case "1":
                listar()
                break
            case "2":
                criar()
                break
            case "3":
                visualizar()
                break
            case "4":
                inscrever()
                break
            case "5":
                excluir()
                break
            case "6":
                alert("Saindo do programa")
                break
            default:
                alert("Opção Invalida")
        }

    } while (opcao!== "6")
}

executar()