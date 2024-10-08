let n
let aux;
let vetor = []

n = prompt("Quantidade de termos: ");
for(let i = 0; i < n; i++){
    vetor[i] = prompt("Valor " + i + ": ");
}
console.log("Vetor inicial: " + vetor);
for(let i = 0; i < vetor.length; i++){
    for(let j = 0; j < vetor.length; j++){
        if(vetor[i] < vetor[j]){
            aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
        }
    }
}
console.log("Vetor ordenado: " + vetor);