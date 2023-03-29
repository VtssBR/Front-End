const medida = prompt("Digite o valor em metros que deseja converter: ")
const unidadeDeMedida = prompt("Digite a unidade de medida que deseja converter sendo elas: " + 
"\nmilimetros (mm)" +
"\ncentímetros (cm)" +
"\ndecímetros (dm)" +
"\ndecâmetros (dam)" +
"\nhectômetros (hm)" +
"\nquilômetros (km)" 
)

const medidaNumerica = parseFloat(medida)

let resultado = 0 

switch (unidadeDeMedida) {
    case "mm": 
    resultado = medidaNumerica * (10 * 10 * 10) 
    alert(
        "O valor convertido é de: "+ resultado + "mm"
    )
    break
    case "cm": 
    resultado = medidaNumerica * (10 * 10) 
    alert(
        "O valor convertido é de: "+ resultado + "cm"
    )
    break
    case "dm": 
    resultado = medidaNumerica * 10  
    alert(
        "O valor convertido é de: "+ resultado + "dm"
    )
    break
    case "dam": 
    resultado = medidaNumerica / 10 
    alert(
        "O valor convertido é de: "+ resultado + "dam"
    )
    break
    case "hm": 
    resultado = medidaNumerica / (10 * 10) 
    alert(
        "O valor convertido é de: "+ resultado + "hm"
    )
    break
    case "km": 
    resultado = medidaNumerica / (10 * 10 * 10) 
    alert(
        "O valor convertido é de: "+ resultado + "km"
    )
    break
    default : 
    alert("Opção Invalida")
    break
}