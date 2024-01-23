alert(` Ingresa tus calificaciones`);
let calification1 = parseInt(prompt(" Ingresa tu primera calificación"));
let calification2 = parseInt(prompt(" Ingresa tu segunda calificación"));
let calification3 = parseInt(prompt(" Ingresa tu tercera calificación"));
let calification4 = parseInt(prompt(" Ingresa tu cuarta calificación"));
let promedio =
  (calification1 + calification2 + calification3 + calification4) / 4;
alert(` Tu promedio es: ${promedio}`);

if (
  calification1 > calification2 &&
  calification1 > calification3 &&
  calification1 > calification4
) {
  alert(` Tu nota más alta es: ${calification1}`);
} else {
  if (calification2 > calification1 && calification2 > calification3 && calification2 > calification4) {
    alert(` Tu nota más alta es: ${calification2}`);
  } else {
    if (calification3 > calification1 && calification3 > calification2 && calification3 > calification4) {
      alert(` Tu nota más alta es: ${calification3}`);
    } else {
      alert(` Tu nota más alta es: ${calification4}`);
    }
  }
}

if (calification1 < calification2 && calification1 <  calification3 && calification1 <  calification4) {
  alert(` Tu nota más baja es: ${calification1}`);
}
else{
if (calification2 < calification1 && calification2 < calification3 && calification2 < calification4) {
  alert(` Tu nota más baja es: ${calification2}`);
}
else {
if (calification3 < calification1 && calification3 < calification2 && calification3 < calification4) {
  alert(` Tu nota más baja es: ${calification3}`);
} else {
  alert(` Tu nota más baja es: ${calification4}`);
  }
 }
}