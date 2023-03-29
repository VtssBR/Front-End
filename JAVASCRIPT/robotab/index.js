let entrada = prompt ("Insira o numero a ser calculado")
let resultado = "" 


for (let i = 1 ; i <= 20; i++) {
    resultado += " -> " + entrada + " X " + i + " = " + (entrada * i ) + "\n"

}

alert("Resultado da tabuada: " +
 "\n" + resultado)