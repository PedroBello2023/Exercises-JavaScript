/* Exercício 17):

Crie um programa em que o usuário digite duas notas e o programa apresente a média das notas e o aproveitamento do aluno.
Se a nota for maior ou igual a nove, aproveitamento A;
Se a nota for maior ou igual a sete, aproveitamento B;
Se a nota for maior ou igual a cinco, aproveitamento C;
se a nota for maior ou igual a três, aproveitamento D;
Se a nota for maior ou igual a um, aproveitamento E;
Se a nota for menor do que um, aproveitamento F.

Resolução do exercício 17): */

const readlineSync = require("readline-sync")

console.log("=========================================================================================================")
console.log("                                         APROVEITAMENTO DE NOTAS")
console.log("=========================================================================================================")

let notaUm = Number(readlineSync.question("Digite aqui a sua primeira nota: "))
let notaDois = Number(readlineSync.question("Digite aqui a sua segunda nota: "))
let media = (notaUm + notaDois)/2

console.clear()
console.log("=========================================================================================================")
console.log("                                         APROVEITAMENTO DE NOTAS")
console.log("=========================================================================================================")

if (media < 1) {
    console.log(`Sua media calculada e igual a ${media.toFixed(2)} e seu aproveitamento e F.`)
} else if (media >= 1 && media < 3) {
    console.log(`Sua media calculada e igual a ${media.toFixed(2)} e seu aproveitamento e E.`)
} else if (media >= 3 && media < 5) {
    console.log(`Sua media calculada e igual a ${media.toFixed(2)} e seu aproveitamento e D.`)
} else if (media >= 5 && media < 7) {
    console.log(`Sua media calculada e igual a ${media.toFixed(2)} e seu aproveitamento e C`)
} else if (media >= 7 && media < 9) {
    console.log(`Sua media calculada e igual a ${media.toFixed()} e seu aproveitamento e B`)
} else if (media >= 9) {
    console.log(`Sua media calculada e igual a ${media.toFixed(2)} e seu aproveitamento e A`)
}
console.log("=========================================================================================================")

