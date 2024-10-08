let a = 0, b = 1, i = 2;
let n = prompt("Quantidade de termos:");
let sequencia = a + ", " + b;

while (i < n) {
    let c = a + b;
    sequencia += ", " + c;
    a = b;
    b = c;
    i++;
}
console.log(sequencia);