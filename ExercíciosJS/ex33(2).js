let readlineSync = require("readline-sync")

/* Exercício 33):

Desenvolva um programa em que o usuário escolha em um menu se quer contar de 0 a 10 ou de 10 a 0.

Resolução do exercício 33): */

console.log("========================================================")
console.log("                   SUPER CONTADOR")
console.log("========================================================")
console.log("Escolha um dentre os dois metodos de contagem abaixo:")
console.log("[1] De 0 até 10")
console.log("[2] De 10 até 0")
console.log("[3] Cancelar")


let escolha = Number(readlineSync.question("Selecione uma opcao: "))

switch (escolha) {
    case 1:
        contador = 1
        do {
            console.log(contador)
            contador++
        } while (contador <= 10)
        console.log("===========================================")
    break
    case 2:
        contador = 10
        do {
            console.log(contador)
            contador--
        } while (contador >=0)
        console.log("===========================================")
    break
    case 3:
        console.log("===========================================")
        console.log("PROGRAMA ENCERRADO!")
        console.log("===========================================")
    break
    default: 
        console.log("===========================================")
        console.log("Opcao invalida!")
        console.log("===========================================")
}