let correo = prompt("Ingrese su correo electrónico ");
let indiceArroba = correo.indexOf("@"); 
let extraer = correo.substring(0, indiceArroba);
console.log(`${extraer}@ceu.es.`)


