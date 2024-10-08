let a = parseInt(prompt("Primeiro numero: "));
let b = parseInt(prompt("Segundo numero: "));

while (b !== 0) {
    let c = b;
    b = a % c;
    a = c;
}
console.log("O MDC é: " + a);