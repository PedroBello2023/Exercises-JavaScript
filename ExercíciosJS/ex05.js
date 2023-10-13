//Exercício 05): Desenvolva um programa que solicite ao usuário digitar o valor de três lados de uma figura geométrica. 
//O programa deverá informar se os valores formam um triângulo, e se esse triângulo é equilátero ou escaleno.

//Resolução do exercício 05):



var readlineSync = require('readline-sync')

console.log('======================')
console.log('TESTE DOS TRIANGULOS')
console.log('======================')

console.log('Digite abaixo as medidas dos lados de uma forma geometrica e dizemos se elas podem formar um triangulo.')
var l1 = Number(readlineSync.question('Digite a medida do lado 1: '))
var l2 = Number(readlineSync.question('Agora a medida do lado 2: '))
var l3 = Number(readlineSync.question('Agora a medida do lado 3: '))

var triangulo  = l1 > Math.abs(l2 - l3) && l1 < l2 + l3 && l2 > Math.abs(l1 - l3) && l2 < l1 + l3 && l3 > Math.abs(l1 - l2) && l3 < l1 + l2
var equilatero = l1 == l2 && l2 == l3 && l1 == l3
var escaleno = l1 != l2 && l2 != l3 && l1 != l3

console.log('======================')
console.log('TESTE DOS TRIANGULOS')
console.log('======================')
console.log(`Os valores digitados foram  ${l1}, ${l2}, ${l3};`)
console.log(`Triangulo: ${triangulo}`)
console.log(`Equilatero: ${equilatero}`)
console.log(`Escaleno: ${escaleno}`)
console.log('======================')





