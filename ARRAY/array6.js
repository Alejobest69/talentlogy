let stringNumeros = prompt('Ingrese el dato');
let coma = stringNumeros.split(',');
coma = coma.map(function(numero) {
    return parseInt(numero);
});
console.log(coma);