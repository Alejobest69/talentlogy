let frase = prompt("Ingrese una frase ");
let separar = frase.split(" ");
let invertirFrase = separar.reverse()
let unirFrase = invertirFrase.join(" ");
console.log(unirFrase);