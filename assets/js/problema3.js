// Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
// que la transforme a grados Kelvin y Fahrenheit.

let n = 0;

while (n == 0) {

    var celsius = Number(prompt("ingrese la temperatura en grados celsius"));

    if (isNaN(celsius)) {
        alert("El número no es valido")
        n = 0
    } else {
        n = 1
    }
}


const kelvin = celsius + 273.15

const farenheit = (celsius * 9 / 5) + 32

document.write(`La temperatura de ${celsius} en °C equivale a ${kelvin} K  o  ${farenheit} °F  `)