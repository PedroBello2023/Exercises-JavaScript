/* Exercício 13):

Crie um sistema em que o usuário digite o seu ano de nascimento e o programa informe se o usuário está apto ou inapto a tirar a carteira de trânsito.
Considerndo apto o usuário maior de idade.

Resolução do Exercício 13): */

let readlineSync = require('readline-sync')

console.log('=====================================================')
console.log('               EXERCÍCIO 013 ')
console.log('=====================================================')
let nasc = readlineSync.question("Qual sua data de nascimento [ano]? ")
let anoAtual = new Date().getFullYear()
let idade = Number(anoAtual - nasc)
console.clear()
console.log('=====================================================')
console.log('       EXERCÍCIO 013 ')
console.log('=====================================================')
if (idade >= 18){
    console.log(`Sua idade é ${idade} anos e você é maior de idade. Por isso está apto a tiar a carteira de trânsito!`)
} else {
    console.log(`Sua idade é ${idade} anos e você  é menor de idade. Por isso NÃO está apto a tiar a carteira de trânsito!`)
}
console.log('=====================================================')

