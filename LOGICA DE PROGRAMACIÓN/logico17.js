let nombre = prompt(" Ingresa tu nombre");
let edad = prompt(" Ingresa tu edad");
let sexo  = prompt(" Ingresa tu sexo");
if( sexo === "Masculino" || sexo === "masculino" && edad >= 18 ){
alert(`${nombre}`);
} 
else{
 alert(` No cumples con los requisitos necesarios`);
}
