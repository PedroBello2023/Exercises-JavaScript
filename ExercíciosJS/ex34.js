let readlineSync = require("readline-sync")

/* Excercício 34):

Elabore um programa em que realize o cadastro de homens e mulheres, suas idades e a cor de cabelo. 
No final mostre o total de homens com mais de 18 anos e cabelos castanhos e o total de mulheres entre 25 e 30 anos de cabelos loiros. Menu da cor do cabelo: Preto, Castanho, Loiro e Ruivo.

Resolução do Exercício 34): */

console.log("=====================================================")
console.log("                ESCOLHENDO PESSOAS ")
console.log("=====================================================")
let totalHomens = 0
let totalMulher = 0
let sexo = 0
let idade = 0
let cabelo = 0
let cadastro = ""

do {
    console.log("Sexo: ")
    console.log("[1] Homem")
    console.log("[2] Mulher")
    sexo = Number(readlineSync.question("Sua escolha: "))
    idade = Number(readlineSync.question("Idade: "))
    console.log("Cor do Cabelo:")
    console.log("[1] Preto")
    console.log("[2] Castanho")
    console.log("[3] Loiro")
    console.log("[4] Ruivo")
    cabelo = Number(readlineSync.question("Sua opcao: "))
    console.log("Cadastrar mais alguém?")
    cadastro = String(readlineSync.question("[s] sim / [n] nao: "))

    switch(sexo){
        case 1:
            if(idade > 18 && cabelo == 2){
            totalHomens +=1
        }
        case 2:
            if ( 25 < idade < 30 && cabelo == 3){
            totalMulher +=1
        }
        break
    }

} while ( cadastro == 's' )
console.log("=====================================================")
console.log(`Total de homens com mais de 18 anos: ${totalHomens}.
`)
console.log(`Total de mulheres com idade entre 25 e 30 anos e cabelos loiros: ${totalMulher}`)
console.log("=====================================================")
