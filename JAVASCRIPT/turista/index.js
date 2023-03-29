const turista = prompt("Escreva o nome do turista: ") 
let citys = "" 
let contagem = 0

let visitou = prompt("O turista ja visitou alguma cidade ? (sim/nao)")

while (visitou === "sim") {
    let city = prompt("Digite a cidade que foi visitada")
    citys += " - " + city + "\n"
    contagem ++
    visitou = prompt("visitou mais cidades ? (sim/nao)")
}
alert(
    "Cidades visitadas pelo turista "+ turista +":" + "\n" + citys + "Quantidades de cidades visitadas: " + contagem
)