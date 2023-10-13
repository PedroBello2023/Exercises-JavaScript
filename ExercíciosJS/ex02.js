//Exercicio 02):

//Desenvolva uma mensagem que pergunte o nome do usuário e reproduza uma mensagem com esse nome.
// OBS: faça isso diferente do modo que fez no ex01!

//Resolução do exercício 02):

var readlineSync = require('readline-sync')
var nome = readlineSync.question('Qual e o seu nome? ')
console.log(`Olá ${nome}, muito prazer em conhecê-lo!`)

