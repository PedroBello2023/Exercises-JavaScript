//Exercicio 01):

//Desenvolva uma mensagem que pergunte o nome do usuário e reproduza uma mensagem com esse nome.

//Resolução do exercício 01):


var readlineSync = require('readline-sync')
var nome = readlineSync.question('Digite seu nome: ')
console.log('Olá '+nome+', seja bem vindo!')