let readlineSync = require("readline-sync")

/* Exercício 27):

Desenvolva um programa que receba a quantidade total de alunos de uma sala.
Em seguida receba os nomes e notas desses alunos e no final mostre o aluno com a melhor nota e sua respectiva nota.

Resolução do Exercício 27): */

console.log("=========================================================")
console.log("                          MAIOR NOTA")
console.log("=========================================================")

let alunos = Number(readlineSync.question("Quantidade de alunos: "))
let alunosMedias = Array()
let alunosNomes = Array()
contador = 1
while (contador <= alunos) {
    let nomeAlunos = String(readlineSync.question(`Nome do aluno ${contador}: `))
    let notasAlunos = Number(readlineSync.question(`Nota do aluno ${contador}: `))
    alunosMedias.push(notasAlunos)
    alunosNomes.push(nomeAlunos)
    contador += 1

}
let maior = 0
let alunoMaior = ""
for (i=0; i <= alunosMedias.length; i++) {
    if (alunosMedias[i] > maior){
        maior = alunosMedias[i]
        alunoMaior = alunosNomes[i]
    }
}
console.log("=========================================================")
console.log("                          RESULTADO")
console.log("=========================================================")

console.log(`O aluno(a) com a  maior nota foi o ${alunoMaior}, com a nota ${maior}.`)

console.log("=========================================================")
