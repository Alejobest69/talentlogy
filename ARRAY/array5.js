let miArray= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let mayor= Math.max (...miArray)
let menor= Math.min (...miArray)
let suma = miArray.reduce(
    (sum, item) => sum + item,
    0 
);
let media = suma / 10
console.log(`El número mayor es: ${mayor}`);
console.log(`El número menor es: ${menor}`);
console.log(`La media de los números es: ${media}`);