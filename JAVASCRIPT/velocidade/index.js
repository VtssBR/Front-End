let carro1 = prompt("insira o nome do primeiro carro")
let velocidade1 = prompt("insira o valor da velocidade do primeiro carro: ")

let carro2 = prompt("insira o nome do segundo carro")
let velocidade2 = prompt("insira o valor da velocidade do segundo carro: ")

if (velocidade1 > velocidade2) {
    alert(carro1 + " é mais rapido que " + carro2)
}
else if (velocidade2 > velocidade1) {
    alert(carro2 + " é mais rapido que " + carro2) 
}
else {
    alert(carro1 + " e " + carro2 + "tem velocidades iguais")
}