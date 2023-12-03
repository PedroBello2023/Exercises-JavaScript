let readlineSync = require("readline-sync")

/* Exercício 26):

Elabore um programa em que o usuário digite o valor inicial e o valor final de uma contagem a ser mostrada pelo programa. Se o valor final for maior que o valor inicial, a contagem será progressiva, caso contrário a contagem será regressiva.

Resolução do Exercício 26): */
console.log("=========================================================")
console.log("                  CONTADOR INTELIGENTE                   ")
console.log("=========================================================")

let valorInicial = Number(readlineSync.question("Digite o valor inicial: "))
let valorFinal = Number(readlineSync.question("Digite o valor final: "))


console.clear()
if (valorFinal < valorInicial){
    console.log("=========================================================")
    console.log("                  CONTAGEM REGRESSIVA                    ")
    console.log("=========================================================")
    while (valorFinal <= valorInicial) {
        console.log(`${valorInicial}`)
        valorInicial -= 1
    }
} else if (valorFinal > valorInicial){
    console.log("=========================================================")
    console.log("                  CONTADOR PROGRESSIVA                   ")
    console.log("=========================================================")
    while (valorFinal >= valorInicial){
        console.log(`${valorInicial}`)
        valorInicial += 1
    }
}