let tamaño = +prompt('Ingrese el tamaño');
let num = +prompt('Ingrese el número');
let multiplos = [];

for (let i = 1; i <= tamaño; i++) {
    multiplos.push(num * i);
}

console.log(multiplos);
