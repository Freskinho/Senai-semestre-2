// Simulando exportação e importação de módulo de utilidade:
const moduloMatematica = {
    somar: (a, b) => a + b,
    multiplicar: (a, b) => a * b
};

console.log("Resultado da soma via Módulo:", moduloMatematica.somar(10, 25));
console.log("Resultado da multiplicação:", moduloMatematica.multiplicar(4, 5))