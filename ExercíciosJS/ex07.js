/* Exercício 07):

Você vai viajar para os estados unidos e quer saber quanto vai levar em dólares.
Construa um sistema que permita converter de reais para dólares.

Reslução do exercício 07):
*/
var readlineSync = require('readline-sync')
console.log('SEUS DOLARES')
var reais = Number(readlineSync.question('Quanto voce pretende levar para a viagem em reais? '))
console.clear()
console.log('SEUS DOLARES')
//dollar hoje = 5,05
var usd = reais / 5.05
console.log(`Você terá um total de US ${(usd).toFixed(2)} com a quantia de R$ ${reais}.`)