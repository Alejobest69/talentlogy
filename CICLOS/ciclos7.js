let contador=0;
for (let i=1;i<=5; i++){
    let nota = parseFloat(prompt("ingrese la nota"));
    console.log(nota);
  if (nota >=3) {
    contador++
    console.log('se suma una unidad al contador y va en '+contador);
  }
}
alert(` las notas que son mayores a 3 fueron :  ${contador}`);