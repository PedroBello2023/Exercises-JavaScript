/* Exercício 15):

Elabore um programa em que o suário digite o seu peso(kg) e altura (metros) e o programa informe seu IMC e se ele está dentro do peso ideal de acordo com as condições abaixo:

Menor que 17 = MUITO ABAIXO DO PESO
Maior ou igual a 17 e menor que 18.5 = ABAIXO DO PESO
Maior ou igual a 18.5 e menor que 25 = PESO IDEAL
Maior ou igual a 25 e menor que 30 = SOBREPESO
Maior ou igual a 30 e menor que 35 = OBESIDADE
Maior ou igual a 35 e menor que 40 = OBESIDADE SEVERA
Maior ou igual a 40 = OBESIDADE MORBIDA

Resoluçaõ do exercício 15): */

let readlineSync = require('readline-sync')
console.log("================================================")
console.log("                  CALCULO DE IMC2  ")
console.log("================================================")

let peso = Number(readlineSync.question("Qual e o seu peso [kg]?"))
let altura = Number(readlineSync.question("Qual e a sua altura[m]? "))
let imc = peso/(altura**2)

console.clear()
console.log("                  CALCULO DE IMC2  ")
console.log("================================================")


if (imc < 17) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está MUITO ABAIXO DO PESO IDEAL.`)
} else if (17 <= imc && imc < 18.5) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} e você está ABAIXO DO PESO IDEAL.`)
} else if (18.5 <= imc && imc < 25) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você esá com o PESO IDEAL.`)
} else if (25 <= imc && imc < 30) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está com SOBREPESO.`)
} else if (30 <= imc && imc < 35) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está com OBESIDADE.`)
} else if (35 <= imc && imc < 40) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} e você está com ODESIDADE SEVERA.`)
} else if ( imc >= 40) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está com OBESIDADE MÓRBIDA.`)
}
console.log("================================================")