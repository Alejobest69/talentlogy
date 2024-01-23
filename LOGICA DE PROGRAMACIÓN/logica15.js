let num = +prompt(" Ingrese el número");
let rad = Math.sqrt(num);
if (num > 0) {
  alert(` la raíz del número es: ${rad}`);
} 
else {
    alert(`Tiene raíz imaginaria`);
}
