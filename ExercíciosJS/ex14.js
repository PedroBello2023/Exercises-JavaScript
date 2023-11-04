/* Exercício 14):

Desenvolva um programa em que o suário digite duas notas e o mostre a média e se o aluno está aprovado ou reprovado.
Considerando aprovado o aluno com media maior ou igual a sete.

Resolução: */

let input = require('readline-sync')

console.log("==================================")
console.log("       CÁLCULO DE MÉDIA         ")
console.log("==================================")

let nota1 = Number(input.question("Qual a sua primeira nota? "))
let nota2 = Number(input.question('Quanto tirou na segunda prova? '))
let media = (nota1 + nota2)/2

console.clear()
console.log("==================================")
console.log("       CÁLCULO DE MÉDIA         ")
console.log("==================================")

if (media < 5) {
    console.log(`Sua média é ${media.toFixed(2)}.
    Situação: REPROVADO!`)
} else if ( 5 <= media && media < 7) {
    console.log(`Sua média é ${media.toFixed(2)}.
    Situação: RECUPERAÇÃO!`)
} else {
    console.log(`Sua média é ${media.toFixed(2)}.
    Situação: APROVADO!`)
}
console.log("==================================")

