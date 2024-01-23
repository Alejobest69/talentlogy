let cate1 = parseInt(prompt(" Ingresa el valor del primer cateto"));
let cate2 = parseInt(prompt(" Ingresa el valor del segundo cateto"));
let proceso =  cate1 * cate1 + cate2 * cate2
let hipotenusa = Math.sqrt(proceso)
alert(` La temperatura en Fahrenheit: ${hipotenusa.toFixed(3)}`);
