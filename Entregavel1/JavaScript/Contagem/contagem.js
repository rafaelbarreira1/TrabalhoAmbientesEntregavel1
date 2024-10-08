let n = prompt("Quantidade de alunos: ")
let i = 0
let cont = 0
while(i < n){
    let nota = prompt("Nota do aluno:")
    if(nota < 50){
        cont = cont + 0
    }else{
        cont = cont + 1
    }
    i++
}

console.log(`Total de ${n} aluno(s)`)
console.log(`Total de ${cont} aluno(s) aprovado(s)`)