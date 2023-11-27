let readlineSync = require("readline-sync")

/* Exercício 23):

Construa um programa em que o usuário digite cinco valores e no final o programa apresente a soma total dos valores digitados.

Resolução do exercício 23):
*/
console.log("======================================")
console.log("          SOMADOR DE VALORES ")
console.log("======================================")
let contador = 1
let somaValores = 0

while (contador <= 5){
    somaValores += Number(readlineSync.question(`Digite o ${contador} valor: `))
    contador++
}

console.log(`A soma dos valores digitados é ${somaValores}.`)



