/* Exercício 16):

Elabore um programa em que o usuário digite seu nome, o seu salário e quantos dependentes ele tem. No final o programa deve apresentar o novo salário do funcionário de acordo com a quantidade de dependentes. Se ele não tem dependentes, aumento de 5%, se ele tem de 1 a 3 dependentes, aumento de 10%, se ele tem de 4 até 6 dependentes, aumento de 15% e se ele tem mais de 6 dependentes, aumento de 18%.

Resolução do Exercício 16): */


let readlineSync = require('readline-sync')

console.log("==============================================================")
console.log("                      SALARIO DE FUNCIONARIOS ")
console.log("==============================================================")
let nome = readlineSync.question("Digite seu nome: ")
let salario = Number(readlineSync.question("Agora informe o seu salario:R$ "))
let dependentes = Number(readlineSync.question("Quantos dependentes voce tem? "))
let salarioNovo = 0
console.clear()
console.log("==============================================================")
console.log("                      SALARIO DE FUNCIONARIOS ")
console.log("==============================================================")
if (dependentes == 0) {
     salarioNovo = salario + salario * (5/100)
     console.log(`Como voce tem ${dependentes} dependentes, seu salario tem um acrescimo de 5% e passa a ser R$${salarioNovo.toFixed(2)}.`)
} else if (1 <= dependentes && dependentes <=3) {
    salarioNovo = salario + salario * (10/100)
    console.log(`Como você tem ${dependentes} dependentes, seu salario tem um acrescimo de 10% e passa a ser R$${salarioNovo}.`)

} else if (dependentes <= 6 && dependentes >= 4) {
    salarioNovo = salario + salario * (15/100)
    console.log(`Como você tem ${dependentes} dependentes, seu salário tem um acrescimo de 15% e passa a ser R$${salarioNovo}`)
} else if (dependentes > 6) {
    salarioNovo = salario + salario * (18/100)
    console.log(`Como você tem ${dependentes} dependentes, seu salario tem um acrescimo de 18% e passa a ser R$${salarioNovo}.`)
}
console.log("==============================================================")