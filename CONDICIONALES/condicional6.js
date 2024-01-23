let movie1 = parseInt(prompt(" Ingresa el precio de la primera pelicula"));
let movie2 = parseInt(prompt(" Ingresa el precio segunda pelicula"));
let movie3 = parseInt(prompt(" Ingresa el precio de la tercera pelicula"));
let precio1Y2 = movie1+movie2
let precio1Y3 = movie1+movie3
let precio2Y3 = movie2+movie3 
if (precio1Y2<movie3){
alert(` El total a pagar es: ${precio1Y2}`);
}

if (precio1Y3<movie2){
    alert(` El total a pagar es: ${precio1Y3}`);
    }

    else{
        alert(` El total a pagar es: ${precio2Y3}`);
        }
         