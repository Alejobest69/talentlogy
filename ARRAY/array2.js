let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = miArray.reduce(
    (sum, item) => sum + item,
    0 
);
let promedio = suma / 10
console.log(promedio);