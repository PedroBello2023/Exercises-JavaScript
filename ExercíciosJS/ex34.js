let readlineSync = require("readline-sync")

/* Excercício 34):

Elabore um programa em que realize o cadastro de homens e mulheres, suas idades e a cor de cabelo. 
No final mostre o total de homens com mais de 18 anos e cabelos castanhos e o total de mulheres entre 25 e 30 anos de cabelos loiros. Menu da cor do cabelo: Preto, Castanho, Loiro e Ruivo.

Resolução do Exercício 34): */

console.log("=====================================================")
console.log("                ESCOLHENDO PESSOAS ")
console.log("=====================================================")
let nome = ""
do {
    let nome = readlineSync.question("Nome: ")
    let sexo = readlineSync.question("Sexo [M/F]: ")
    let idade = readlineSync.question("Idade: ")
    console.log("Tipos de Cabelo:")
    console.log("[1] Preto")
    console.log("[2] Castanho")
    console.log("[3] Loiro")
    console.log("[4] Ruivo")
    let cabelo = Number(readlineSync.question("Selecione um tipo de cabelo: "))
    let continuar = readlineSync.question("Deseja continuar [S/N]? ")


} while(continuar == "s")

let homem = 0
let mulher = 0
if (sexo == "m") {
    homem++
} else if (sexo == "f") {
    mulher++
}

console.log(`Foram cadastrados ${homem} homens e ${mulher} mulheres.`)