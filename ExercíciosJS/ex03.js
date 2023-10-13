//Exercício 03):

//Desenvolva um programa que solicite a usuário digitar dois números e no final apresente o resultado da soma entre esses números.

//Resolução do exercício 03):

var readlineSync = require('readline-sync')
var n1 = Number(readlineSync.question('Digite um numero: '))
var n2 = Number(readlineSync.question('Digite outro numero: '))
var s = n1 + n2
console.log(`A soma entre ${n1} e ${n2} e ${s}.`)