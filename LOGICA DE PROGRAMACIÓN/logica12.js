let gasto = parseInt(prompt(" Ingrese su gasto"));
if (gasto > 500&&gasto < 1000) {
  alert(` Su tarifa es de 1.2`);
} else {
  if (gasto > 999 && gasto < 1851) {
    alert(` Su tarifa es de 1.0`);
  } else {
    if (gasto > 1850) {
      alert(` Su tarifa es de 0.9`);
    } else {
      alert(` La tarifa no cumple el gasto minímo `);
    }
  }
}
