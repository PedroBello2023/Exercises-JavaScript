/* Exercicio 10)

Desenvolva um programa em que o usuário digite o ano de nascimento e o programa mostre a idade do usuário e uma mensagem informando se ele ja atingiu a maioridade 

Resolução do exercício:
*/
console.log('================')
console.log(' EXERCÍCIO 10 ')
console.log('================')
var readlineSync = require('readline-sync')
let nasc = Number(readlineSync.question("Qual sua data de nascimento? "))
let ano = new Date().getFullYear()
let idade = ano - nasc
if (idade >= 18) {
    console.log(`Você tem ${idade} anos e ja atingiu a maior idade.`)
} else {
    console.log(`Você tem ${idade} anos e ainda faltam ${18 - idade} anos para atingir a maior idade.`)
}