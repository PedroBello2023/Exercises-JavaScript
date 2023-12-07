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
let escolha = readlineSync.question("Selecione uma opcao: ")
contador = 1
if (escolha == 1) {
    contador = 1
    while (contador <= 10){
        console.log(contador)
        contador++
        console.log
    }
    console.log("========================================================")
} else if(escolha == 2){
    contador = 10
    while(contador >= 0){
        console.log(contador)
        contador--
        console.log
    }
    console.log("========================================================")
} else {
    console.log("========================================================")
    console.log("PROGRAMA ENCERRADO!")
    console.log("========================================================")
}