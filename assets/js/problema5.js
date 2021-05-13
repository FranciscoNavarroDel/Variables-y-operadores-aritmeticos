// 5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se
// piden a continuación.
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.

let numeros = []
let suma = 0
let promedio = 0

for (let pass = 0; pass < 5; pass++) {
    let numero = Number(prompt(`ingrese el ${pass + 1} número`))
    numeros.push(numero)
    suma = suma + numero
}

promedio = suma / 5

document.write(`los numeros ingresados son ${numeros}, la suma de los números es ${suma}, el promedio de los números es ${promedio}`)