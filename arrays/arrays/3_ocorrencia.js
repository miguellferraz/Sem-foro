let numeros = [4, 5, 7, 8, 2, 5, 9, 5, 5];
let valorProcurado = 5;
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == valorProcurado) {
        contador++;
    }
}
console.log("O número (", valorProcurado, ") aparece " + contador, "vezes");