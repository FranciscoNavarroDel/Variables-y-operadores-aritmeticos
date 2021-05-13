// Realizar operaciones con dos números.Pediralusuarioqueingresedosnúmerosdiferentesymayoresacero.Paraambosnúmeros, calcular lo siguiente:●Suma●Resta●División●Multiplicación●Módulo

let n = 0;

while (n == 0) {
    var numero1 = Number(prompt("ingrese un número mayor a 0"));
    console.log(numero1)
    var numero2 = Number(prompt("ingrese un segundo número mayor a 0 "));
    if ((numero1 < 0 || numero2 < 0) || (isNaN(numero1) || isNaN(numero2))) {
        alert("El número no es valido")
        n = 0
    } else {
        n = 1
    }
}

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const division = (numero1 / numero2).toFixed(2);
const multiplicacion = numero1 * numero2;
const modulo = numero1 % numero2;

document.write(`Los números ingresados son ${numero1} y ${numero2} la suma de los números es ${suma}, la resta de los números es ${resta},
                la division de los numeros es ${division}, la multiplicacion de los números es ${multiplicacion}, el modulo del número es ${modulo}`);