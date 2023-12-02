let readlineSync = require("readline-sync")

/* Exercício 25):

Desenvolva um programa em que o usuário faça conversão de moeda. O usuário deve escolher quantas conversões ele realizrá antes de digitar o valor em real que ele tem. O valor em real deve ser convertido para dólar.

Resolução do exercício 25): */

console.log("==========================================================")
console.log("                  CONVERSOR DE MOEDAS        ")
console.log("==========================================================")

let numeroDeConversoes = Number(readlineSync.question("Quantas conversoes voce deseja efetuar? "))

contador = 1
while (contador <= numeroDeConversoes) {
    let valor = Number(readlineSync.question("Digite o valor em Reais: R$ "))
    let valorEmDolares = valor / 4.88
    console.log("==========================================================")
    console.log(`O valor de R$ ${valor} está US$ ${valorEmDolares.toFixed(2)} convertido em dolares.`)
    console.log("==========================================================")
    contador++

}
console.log("==========================================================")
console.log("                   CONVERSAO FINALIZADA        ")
console.log("==========================================================")
