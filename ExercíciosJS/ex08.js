/*Exercício 08):

Você chegou nos EUA olhou para o termômetro e viu 100 graus fahrenheit, mas você quer saber quanto é esta temperatura em graus Celsius.
Construa um programa que solucione esse problema.

Resolução do exercício 08): */
//°C = (°F − 32) ÷ 1, 8

var readlineSync = require('readline-sync')
var tempF = Number(readlineSync.question('Temperatura em Fahrenheit: '))
var tempC = (tempF - 32) / 1.8
console.log(`A temperatura de ${tempF}F convertido para graus Celsius é equivalente a ${tempC.toFixed(2)}°.`)
