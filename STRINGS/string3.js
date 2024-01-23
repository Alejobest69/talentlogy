let numero = prompt('Ingrese su número de teléfono');
if (!/^(\+34-\d{9}-\d{2})$/.test(numero)) {
    console.log("El formato del número de teléfono no es válido.");
}
else{
const numeroSin = numero.substring(4, 13);
console.log("El número de teléfono sin el prefijo y sin la extensión es: ", numeroSin);
}