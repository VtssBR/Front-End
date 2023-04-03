let opcao = ""
const imoveis = []


do{
    opcao= prompt(
    "Total de Imovéis: " + imoveis.length +
    "\nEscolha uma das opçoes:" + 
    "\n1- Salvar um imovel" +
    "\n2- Mostrar imoveis cadastrados" +
    "\n3- Sair"
    )

    switch(opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietario do imovel: ")
            imovel.quartos = prompt("Informe quantos quartos o imovel possui: ")
            imovel.banheiros = prompt("Informe quantos banheiros o imovel possui: ")
            imovel.garagem = prompt("Possui garagem ? (sim/nao)")

            const confirmacao = confirm("Tem certeza que deseja salvar este imovel?: " +
            "\nProprietario: " + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros: " + imovel.banheiros + 
            "\nPossui garagem ? " + imovel.garagem )
            
            if (confirmacao) {
                imoveis.push(imovel)
            }
            break
                
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imovel " + (i+1) +
                    "\nProprietario: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros " + imoveis[i].banheiros +
                    "\nPossui garagem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando")
            break;
        default :
            alert("Opção invalida")
    }
}while(opcao !== "3")