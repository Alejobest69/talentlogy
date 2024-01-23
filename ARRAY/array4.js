let miArray = [9, 8, 12, 15, 16, 18, 20, 10, 6, 4,];
let aprobados = miArray.slice(2, 7);
let suma = aprobados.reduce(
    (sum, item) => sum + item,
    0 
);
let promedio = suma / 5
console.log(`El promedio de los aprobados es: ${promedio}`);

let desaprobados = miArray.filter(function(elemento){
    return elemento < 12;
});
let sum = desaprobados.reduce(
    (sumaa, item) => sumaa + item,
    0 
);
let media = sum / 5
console.log(`El promedio de los desaprobados es: ${media}`);
