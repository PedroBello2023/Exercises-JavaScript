/* Exercício 19):

Desenvolva um programa em que o usuário escolha quanto será a sua doação e no final o programa apresente uma mensagem de quanto foi a doação. Caso o usuário escolha "outros valores" o programa deverá informar no final quanto foi esse valor, conforme o valor inserido pelo usuário.

Resolução do Problema 19):*/





let readlineSync = require("readline-sync")
 console.log("===================================================")
 console.log("                 CRIANÇA ESPERANÇA  ")
 console.log("===================================================")
 console.log("      MUITO OBRIGADO PELA SUA DOAÇÃO")
 console.log("      [1] PARA DOAR R$10,00")
 console.log("      [2] PARA DOAR R$25,00")
 console.log("      [3] PARA DOAR R$50,00")
 console.log("      [4] PARA DOAR OUTROS VALORES")
 console.log("      [5] PARA CANCELAR")
 console.log("===================================================")
 let opc = Number(readlineSync.question("Escolha uma das opcoes acima: "))
 if (opc == 1) {
    console.log("===================================================")
    console.log("VOCÊ DOOU R$10,00. O CRIANÇA ESPERANÇA AGRADECE!")
    console.log("===================================================")
 } else if (opc == 2) {
    console.log("===================================================")
    console.log("VOCÊ DOOU R$25,00. O CRIANÇA ESPERANÇA AGRADECE!")
    console.log("===================================================")
 } else if (opc == 3) {
    console.log("===================================================")
    console.log("VOCÊ DOOU R$50,00. O CRIANÇA ESPERANÇA AGRADECE!")
    console.log("===================================================")
 } else if (opc == 4) {
    console.log("===================================================")
    let outroValor = Number(readlineSync.question("Qual o valor que voce deseja doar? R$ "))
    console.log("===================================================")
    console.log(`VOCÊ DOOU ${outroValor.toFixed(2)}. O CRIANÇA ESPERANÇA AGRADECE!`)
    console.log("===================================================")

 } else if (opc == 5) {
    console.log("===================================================")
    console.log("OPERAÇÃO CANCELADA. TENHA UMA BOA NOITE!")
    console.log("===================================================")
 }
