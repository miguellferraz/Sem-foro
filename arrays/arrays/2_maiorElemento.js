let numeros = [10, 45, 2, 89, 33, 77, 5];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}
console.log("O maior número é: " + maiorNumero);