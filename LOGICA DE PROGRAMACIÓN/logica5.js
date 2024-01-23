let base1 = parseFloat(prompt(" Ingresa el valor de la primera base"));
let base2 = parseFloat(prompt(" Ingresa el valor de la segunda base"));
let altura = parseFloat(prompt(" Ingresa el valor de la altura"));
let area = (base1 + base2) * altura / 2
alert(` El area del trapecio es: ${area.toFixed(1)}`);
