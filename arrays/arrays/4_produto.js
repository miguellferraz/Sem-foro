let numeros = [10, 2, 5, 8, 10, 4]
let produto = 1

for (i = 0; i < numeros.length; i++) {
    produto *= numeros[i]
}
console.log("O produto de todos elementos é:", produto)