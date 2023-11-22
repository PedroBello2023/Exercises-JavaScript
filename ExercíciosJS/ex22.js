/* Exercício 22):

Crie um programa que conte de 0 até algum número da escolha do usuário, pulando de um fator também escolhido pelo usuário.

Resolução do exercício 22): */

let readlineSync = require("readline-sync")

console.log("================================")
console.log("       CONTAGEM ALEATÓRIA")
console.log("================================")

let num = Number(readlineSync.question("Ate aonde voce contar? "))
let pula = Number(readlineSync.question("Gostaria de pular de quanto em quanto? "))

for (i = 0; i <= num; i += pula) {
    console.log(`${i}`)
}

