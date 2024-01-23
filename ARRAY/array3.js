let dato = prompt('Ingrese el dato');
let miArray = ["gato", "vaca", "perro", "ballena"]
let index = miArray.findIndex((animal) => animal == dato);
console.log(index);
/*let index = miArray.findIndex(function() {

    return ;
  
  });*/