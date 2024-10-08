let a = prompt("Digite um número: ");
let ehPrimo = true;

if (a <= 1) {
    console.log("O número " + a + " não é primo");
} else {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            console.log("O número " + a + " não é primo");
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log("O número " + a + " é primo");
    }
}