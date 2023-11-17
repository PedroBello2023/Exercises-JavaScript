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
 let doacao = 0
 switch(opc) {
    case 1:
        doacao = 10
        break;
    case 2:
        doacao = 25
        break;
    case 3:
        doacao = 50
        break;
    case 4:
        console.log("===================================================")
        doacao = Number(readlineSync.question("Qaul o valor que voce deseja doar? R$ "))
        console.log("===================================================")
        break;
    case 5:
        doacao = 0
        break
    default:
        console.log(`Sua doacao será considerada ${doacao}`)
        break;
 }
 console.log("===================================================")
 console.log("                 CRIANÇA ESPERANÇA  ")
 console.log("===================================================")
 console.log(`MUITO OBRIGADO! VOCÊ DOOU R$${doacao}.`)
 console.log("===================================================")