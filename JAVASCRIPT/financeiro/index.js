let saldo = prompt("Informe o dinheiro inicial: ")
let opcao = ""

do {
    opcao = prompt(
        "Saldo diponivel " + saldo +
        "\n -1 Adicionar dinheiro" +
        "\n -2 Remover dinheiro" +
        "\n -3 Sair"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adicionado"))
            break
        case "2":
            saldo -= prompt("Informe o valor a ser adicionado")
            break
        case "3":
            alert("encerrando o programa")
            break
        default: 
            alert("opção invalida")
    }

} while (opcao == ! "3")
