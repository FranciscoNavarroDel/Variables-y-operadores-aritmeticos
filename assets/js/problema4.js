// Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número
// decimal.

let n = 0;

while (n == 0) {

    var dias = parseInt(prompt("ingresar la cantidad de días"))

    if (isNaN(dias)) {
        alert("El número no es valido")
        n = 0
    } else {
        n = 1
    }
}


let año = Math.floor(dias / 365)

let restante_1 = dias - Math.floor(dias / 365) * 365

let semanas = Math.floor(restante_1 / 7)

let dias_restantes = restante_1 - Math.floor(restante_1 / 7) * 7


document.write(`Los ${dias} días equivalen a ${año} año(s)  con ${semanas} semana(s) y ${dias_restantes} días `)