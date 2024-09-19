let numeros = [10, 3, 7, 6, 8, 145, 120, 60, 42]
let pares = []

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] %2 == 0) {
        pares.push(numeros[i]);
    }      
}
console.log("Os números pares são:", pares)