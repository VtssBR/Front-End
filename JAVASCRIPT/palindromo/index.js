const word = prompt("Insira a palavra a ser analisada")
let palavraInvertida = ""

for (let i = word.length - 1; i >= 0 ; i--) {
    palavraInvertida += word[i]
}

if (word === palavraInvertida) {
    alert( word + " é um palindromo")
}
else {
    alert( word + " nao é um palindromo" + "\n" +
    word + " ==! " + palavraInvertida )
}