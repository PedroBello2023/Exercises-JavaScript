/* Exercpicio 20):

Crie um programa que conte de 1 até 10.

Resolução do problema: */


let readlineSync = require("readline-sync")

console.log("================================")
console.log("       CONTAGEM REGRESSIVA")
console.log("================================")

let num = Number(readlineSync.question("Quer contar ate quanto? "))
for (i = num; i >= 0; i --){
    console.log(`${i}`)
}

let contador = num

/*while (contador < 0) {
    console.log(`${contador}`)
    contador--
}*/
