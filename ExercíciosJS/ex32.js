let readlineSync = require("readline-sync")

/* Exercício 32)

Crie um programa em que o usuário digite um número e mostre como resultado se esse número é primo ou não.

resolução do problema 32): */

console.log("=====================================================")
console.log("                      NUMERO PRIMO")
console.log("=====================================================")

let numero = Number(readlineSync.question("Digite um numero: "))

let contador = numero
let ehPrimo = 0

do {
    if (numero % contador == 0){
        ehPrimo++
    }

    contador--
    
} while (contador > 0)

if(ehPrimo == 2){
    console.log(`O numero ${numero} e primo!`)
} else {
    console.log(`O numero ${numero} nao e primo!`)
}
console.log("=====================================================")