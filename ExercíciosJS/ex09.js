/* Exercício 09)

Você ficou sem dinheiro e teve que pegar emprestado um empréstimo.
Você vai pagar um valor 20% a mais do valor que tomou emprestado e vai poder dividir em quantas parcelas quiser. Construa um programa que mostre de quanto será o valor de cada parcela.

Resolução do exercício:*/
var readlineSync = require('readline-sync')
let valor = Number(readlineSync.question("Qual o valor do emprestimo? "))
let parcelas = Number(readlineSync.question("Deseja parcelar de quantas vezes? "))

let valorComJuros = valor * (20/100) + valor
let valorParcelasComJuros = valorComJuros / parcelas

console.log(`Você quer R$${valor.toFixed(2)} emprestado e irá pagar ${parcelas}x de R$${valorParcelasComJuros.toFixed(2)} com o juros ja calculados. `)
