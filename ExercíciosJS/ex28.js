let readlineSync = require("readline-sync")

/* Exercício 28):

Desenvolva um programa que pede para o usuário escolher um número e seja mostrado a tabuada desse número.

Resolução do problema 28): */

let num = Number(readlineSync.question("Digite um numero: "))
contador = 1
console.log("==================================================")
console.log("                 TABUADA EM JAVASCRIPT")
console.log("==================================================")
while (contador <= 10) {
    console.log(`${contador} x ${num} = ${contador * num}`)
    contador++
}