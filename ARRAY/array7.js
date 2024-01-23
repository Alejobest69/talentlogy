let numeros = [1, 2, 3, 4, 5]
let numerosmultiplicados = numeros
numerosmultiplicados = numerosmultiplicados.map(function(numero) {
    return  (numero*2);
});
console.log(numerosmultiplicados);