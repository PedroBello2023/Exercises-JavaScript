/* Exercicio 12)

Elabore um programa em que o suário digite o seu peso(kg) e altura (metros) e o programa informe seu IMC e se ele está dentro do peso ideal ou fora do peso ideal. Dica: faça o peso ideal entre 18.5 e 25.

Resolução do exercício 12) */

let readlineSync = require('readline-sync')
console.log("================================================")
console.log("                  CALCULO DE IMC  ")
console.log("================================================")
let peso = Number(readlineSync.question("Digite e seu peso [Kg]? "))
let altura = Number(readlineSync.question("Qual e a sua altutra[m]? "))
console.clear()
console.log("================================================")
console.log("                  CALCULO DE IMC  ")
console.log("================================================")

let imc = peso/(altura*altura).toFixed(2)

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc} e você está abaixo do peso.`)
} else if ( 18.5 <= imc && imc <= 25) {
    console.log(`Seu IMC é ${imc} e, portanto, você está com o peso ideal.`)
} else {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está acima do peso.`)
}
console.log("================================================")


