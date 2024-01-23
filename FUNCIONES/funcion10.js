let n = +prompt('Ingrese el número');
function conteo (n) {
     let x = n
    if (x <= 1) {
        return x;
    }
    console.log(x);
    return conteo(x-1)
    
}


console.log(conteo(n));

