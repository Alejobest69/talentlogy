let marca = prompt(" Ingresa la marca de tu moto");
if (marca === "honda" || marca === "Honda" ) {
alert(` Tu moto tiene un descuento del 5%`);
}
else {
    if (marca === "Yamaha" || marca === "yamaha") {
        alert(` Tu moto tiene un descuento del 8%`);
    } else {
      if (marca === "Suzuki" || marca === "suzuki") {
        alert(` Tu moto tiene un descuento del 10%`);
      } 
      else {
        alert(` Tu moto tiene un descuento del 2%`);
      }
    }
  }

  