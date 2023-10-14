/*exercício 06):

Você está fazendo aniversário, mas não sabe quantas velas colocar no seu bolo. Sabe apenas o ano do seu nascimento.
Construa um programa que solucione este problema.

Resolução do exercício 06):*/

var readlineSync = require('readline-sync')

var nasc = Number(readlineSync.question('Qual a sua data de nascimento? '))
const ano = new Date().getFullYear()
var velas = ano - nasc
if(nasc > ano) {
    console.log('[ERRO] Ano de nascimento maior que o ano atual!')
} else {
    console.log(`A quantidade de velas a serem colocadas no bolo é ${velas + 1}.`)
}
