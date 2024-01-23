let genero = (prompt(" Ingresa tu género"));
let edad = parseInt(prompt(" Ingresa tu edad"));


if( genero === "femenino" || "mujer" && edad > 54){
alert(`Tu ya te puedes jubilar`);
}
else if (genero === "masculino" || "hombre" && edad >= 60) {
 alert(` Tu te puedes jubilar`);
    }

else if (genero === "femenino" || "mujer" && edad <= 54) {
 alert(` Tu actualmente no te puedes jubilar`);
    }  

else if (genero === "masculino" || "hombre"  && edad < 60) {
 alert(` Tu actualmente no te puedes jubilar`);
    }  
else{
 alert(` ERROR... Revisa bien que estes completando correctamente tus datos`);
}
