function areaTriangulo() {
    const base = prompt("Insira a base do triangulo: ")
    const altura = prompt("Insira a altura do triangulo: ")
    return base * altura / 2
}

function areaRetangulo() {
    const base = prompt("Insira a base do retangulo: ")
    const altura = prompt("Insira a altura do retangulo: ")
    return base * altura
}

function areaQuadrado() {
    const lado = prompt("Insira o lado do quadrado: ")
    return lado * lado
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("Insira a base maior do trapezio: "))
    const baseMenor = parseFloat(prompt("Insira a base menor do trapezio: "))
    const altura = prompt("Insira a altura do trapezio: ");
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo() {
    const raio = prompt("Insira o raio do circulo: ")
    return 3.14 * raio * raio
}

function exibirMenu() {
    return prompt(
        "CALCULADORA GEOMETRICA: " +
        "\nEscolha uma das opções a seguir para Calcular: " +
        "\n1- Area de um triangulo: " +
        "\n2- Area de um retangulo: " +
        "\n3- Area de um quadradado: " +
        "\n4- Area de um trapezio: " +
        "\n5- Area de um circulo: " +
        "\n6- Sair")
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = areaTriangulo()
                break
            case "2":
                resultado = areaRetangulo()
                break
            case "3":
                resultado = areaQuadrado()
                break
            case "4":
                resultado = areaTrapezio()
                break
            case "5":
                resultado = areaCirculo()
                break
            case "6":
                alert("Encerrando")
                break
            default:
                alert("Opção Invalida")
                break
        }

        if(resultado) {
            alert("Resultado: " + resultado)
        }

    } while (opcao !== "6")
}

executar()