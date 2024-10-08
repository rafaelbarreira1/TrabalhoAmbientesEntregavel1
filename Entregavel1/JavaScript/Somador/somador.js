let n;
let numero = 0;

n = prompt("Quantidade de termos: ");
for (let i = 0; i < n; i++) {
    numero += prompt("Valor " + i + ":"); 
}
console.log("A soma é: " + numero);