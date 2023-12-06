let readlineSync = require("readline-sync")

/* Exercício 31):

Deseonvolva um programa em que o usuário digite um número e o programa mostre o fatorial desse número. No final o programa deve perguntar se o usuário quer calcular outro fatorial.

Resoluçao do problema 31): */

console.log("======================================================")
console.log("                     FATORIAL COM REPETIÇÃO")
console.log("======================================================")

let numero = 0
let contador = 1
let fatorial = 1
let repetir = 0

do {
    numero = Number(readlineSync.question("Digite um numero: "))
    do{
        fatorial *= contador
        contador++
    } while (contador <= numero) 
    console.log(`O fatorial de ${numero} é ${fatorial}.`)
    console.log("======================================================")

    console.log("Repetir? ")
    console.log("[1] Sim")
    console.log("[2] Não")
    repetir = Number(readlineSync.question("Deseja calcular novamente? "))

} while(repetir == 1)

console.log("Programa Encerrado!")
console.log("======================================================")


