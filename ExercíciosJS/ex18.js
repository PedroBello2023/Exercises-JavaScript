/* Exercício 18):

Construa um programa em que seja digitado o placar de um jogo e no final apresente o status da partida de acordo com as seguintes condiçoes:
se a diferença for igual a zero, o status mostrará empate, se a diferença for de um até três gols, então o status normale se a diferença for maior do que três então o status mostrará Goleada.

Resolução do Exercício 18):*/

let readlineSync = require("readline-sync")

console.log("==========================================================================================")
console.log("                               PLACAR DO JOGO")
console.log("==========================================================================================")

let timeA = Number(readlineSync.question("Gols do Time A: "))
let timeB = Number(readlineSync.question("Gols do timeB: "))

console.clear()
console.log("==========================================================================================")
console.log("                               PLACAR DO JOGO")
console.log("==========================================================================================")

const placar = `${timeA} x ${timeB}`
const difer = Math.abs(timeA - timeB)


if (difer == 0 ) {
    console.log(`O placar do jogo foi ${placar}. Uma diferença de ${difer} gols. Status da partida: Empate.`)
} else if (difer > 0 && difer <= 3){
    console.log(`O placar do jogo foi ${placar}. Uma difernça de ${difer} gols. Status da partida: Normal.`)
} else if (difer > 3) {
    console.log(`O placar do jogo foi ${placar}. Uma diferença de ${difer} gols. Status da partida: 
    Goleada.`)
}
console.log("==========================================================================================")