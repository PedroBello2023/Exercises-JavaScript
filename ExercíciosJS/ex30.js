let readlineSync = require("readline-sync")

/* Exercício 30):

Deseonvolva um programa em que o usuário digite um número e o programa mostre o fatorial desse número.

Resoluçao do problema 30): */

console.log("======================================================")
console.log("                        FATORIAL")
console.log("======================================================")

contador = 1
let fatorial = 1
let num = readlineSync.question("Qual numero voce deseja calcular o fatorial? ")

while (contador <= num) {
    fatorial *= contador
    contador++
}

console.log(`O fatorial de ${num} é ${fatorial}.`)
console.log("======================================================")


