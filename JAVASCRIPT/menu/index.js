let opcao = "0"


do {
    
    opcao = prompt(
        "Escolha uma das opções: "+
        "\n 1- COCA COLA" +
        "\n 2- GUARANA" +
        "\n 3- PEPSI" +
        "\n 4- FANTA" +
        "\n 5- ENCERRAR" 
        )

    switch(opcao) {
        case "1": 
            alert("COCA COLA")
            break
        case "2": 
            alert("GUARANA")
            break
        case "3":
            alert("PEPSI")
            break
        case "4": 
            alert("FANTA")
            break
        case "5":
            alert("Voce decidiu encerrar")
            break
        default : 
            alert("Opção invalida")
    }
    

} while (opcao !== "5")