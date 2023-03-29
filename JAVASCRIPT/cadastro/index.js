const firstName = prompt("Escreva o primeiro nome: ")
const secondName = prompt("Escreva o segundo nome: ")
const studys = prompt("Escreva seu campo de estudos: ")
const year = prompt("Escreva seu ano de nascimento")

alert(
"Recruta cadastrado com sucesso: \n" +
"\nNome : " + firstName + " " + secondName +
"\nCampo de estudos: " + studys +
"\nIdade: " + (2023 - year)
)