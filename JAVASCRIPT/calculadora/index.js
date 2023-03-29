let entrada1 = prompt("Digite o primeiro numero: ")
let entrada2 = prompt("Digite o segundo numero: ")

let firstNumber = parseFloat(entrada1)
let secondNumber = parseFloat(entrada2)

let soma = (firstNumber + secondNumber)
let subtracao = (firstNumber - secondNumber)
let multiplicacao = (firstNumber * secondNumber)
let divisao = (firstNumber / secondNumber)

alert(
    "Resultados: \n" + 
    "\n Soma: " + soma + 
    "\n Subtração: " + subtracao +
    "\n Multiplicação: " + multiplicacao +
    "\n Divisão: " + divisao
)