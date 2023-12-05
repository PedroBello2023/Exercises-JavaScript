let readlineSync = require("readline-sync")

/* Exercício 29):

Elabore um programa que receba até cinco números e no final mostre quantos números negativos foram digitados.

Resolução 29): */

console.log("=====================================================")
console.log("             CONTADOR DE NUMERO NEGATIVO")
console.log("=====================================================")
contador = 1
let numeros = Array()
while (contador <= 5) {
    let num = Number(readlineSync.question(`Digite o numero ${contador}: `))
    if (num < 0) {
        numeros.push(num)
    }
    contador++
}
console.log(`Voce digitou um total de ${numeros.length} negativos.`)
console.log("=====================================================")
