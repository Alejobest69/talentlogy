let nombree = '';
let edadd;
let curso = [];
let mayor = 0; 

while (nombree !== "*") {
    nombree = prompt("Ingrese el nombre o '*' para finalizar");
    if (nombree === '*') {
        break;
    }
    edadd = parseInt(prompt('Ingrese la edad'));

    if (edadd >= 18) {
        let alumno = {
            nombre: nombree,
            edad: edadd 
        };
        curso.push(alumno);

        
        if (edadd > mayor) {
            mayor = edadd;
        }
    }
}

console.log(curso);

let mayorsitos = curso.filter(function(element) {
    return element.edad === mayor; 
});

console.log(mayorsitos);
