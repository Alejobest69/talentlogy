let calification = parseInt(prompt(" Ingrese su calificación de 0 a 10"));
if (calification > -1 && calification < 6) {
    alert(` Su calificación es Insuficiente`);
}
if (calification > 5 && calification <8) {
    alert(`Su calificación es Suficiente`);

}
if (calification > 7 && calification <10) {
    alert(`Su calificación es Buena`);
      
}
if (calification > 9 && calification <11) {
    alert(`Su calificación es Excelente`);

}
else{
    alert(`ERROR`);

}