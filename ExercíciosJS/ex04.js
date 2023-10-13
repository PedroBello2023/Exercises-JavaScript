//Exercicio 04):

//Desenvolva um programa que solicite o usuário a digitar dois numeros e depois mostre a média entre esses numeros.

//Resolução do exercício 4):

var readlineSync = require('readline-sync')
var n1 = Number.parseFloat(readlineSync.question('Digite um numero: '))
var n2 = Number.parseFloat(readlineSync.question('Digite outro numero: '))

var media = (n1 + n2)/2

console.log(`A media ente os numeros ${n1} e ${n2} e igual a ${media}.`)