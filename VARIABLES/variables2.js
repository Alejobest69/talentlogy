let precio = parseInt(prompt("Introduce el precio del producto"));
let porcentaje = parseInt(prompt("Introduce el porcentaje de descuento para su producto"));


let descuento = precio*porcentaje/100
let precioFinal= precio-descuento
alert(`Este es el precio del producto con el descuento incluido ${precioFinal}`);
