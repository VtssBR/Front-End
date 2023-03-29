const player = prompt("insira o nome do jogador: ")
const attack = prompt("insira quantos pontos de ataque seu atacante possui: ")

const defender = prompt("insira o nome do defensor: ")
let life = prompt("insira quantos pontos de vida possui o defensor: ")
const defend = prompt ("insira quantos pontos de defesa seu defensor possui")
const shield = prompt("o defensor possui estudo ? (sim / nao) : ")


let damage = 0 

if (attack > defend && shield === "nao" ) {
    damage = attack - defend 
} 
else if (attack > defend && shield === "sim" ) {
    damage = (attack - defend) / 2 
}
life -= damage

alert( player + " causou " + damage + "pontos de dano em" + defender)

alert(
    player + "\nPoder de ataque: "+ attack + "\n\n" +
    defender + "\nPontos de vida: " + life +
    "\n Poder de defesa: " + defend +  "\nPossui escudo: " + shield)