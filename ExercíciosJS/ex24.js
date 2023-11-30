let readlineSync = require("readline-sync")

/* Exercício 24):

Crie um programa em que o usuário digite cinco valores e no final o programa apresente a soma totl dos valores digitados e qual o maior valor e o menor valor digitados.

Resolução do exercício 24): */

console.log("======================================")
console.log("          SOMADOR DE VALORES ")
console.log("======================================")
let contador = 1
let somaDeValores = 0
let maior = 0 
let menor = 0 

while (contador <= 5) {
    let valores = Number(readlineSync.question(`Digite o valor ${contador}: `))
    
    if (contador == 1) {
        menor = valores
    } 
    if (valores > maior){
        maior = valores
    } 
    if (valores < menor) {
        menor = valores
    }
    somaDeValores = somaDeValores + valores
    contador ++
} 

console.log(`A soma dos valores digitados é ${somaDeValores}`)
console.log(`O maior numero digitado foi ${maior} e o menor foi ${menor}.`)