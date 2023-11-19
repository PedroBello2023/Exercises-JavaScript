/* Exercpicio 20):

Crie um programa que conte de 1 até 10.

Resolução do problema: */


let readlineSync = require("readline-sync")

console.log("================================")
console.log("         CONTANDO ATÉ 10")
console.log("================================")

let num = Number(readlineSync.question("Quer contar ate quanto? "))
for (i=0; i <= num; i ++){
    console.log(`${i}`)
}

let contador = 0

/*while (contador < num) {
    console.log(`${contador}`)
    contador++
}*/
