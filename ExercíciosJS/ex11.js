console.log("==================")
console.log("   PAR OU IMPAR ")
console.log("==================")

let readlineSync = require('readline-sync')
let num = Number(readlineSync.question("Digite um numero inteiro: "))

if (num % 2 == 0) {
    console.log("==================")
    console.log(`O número ${num} e par!`)
    console.log("==================")
} else {
    console.log("==================")
    console.log(`O número ${num} e ímpar.`)
    console.log("==================")
}