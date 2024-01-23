alert('Elige una opción: Sumar, restar, multiplicar o dividir');
let operacion = prompt("Ingresa la opción elegida");
let n1 = parseInt(prompt(" Ingresa el primer número"));
let n2 = parseInt(prompt(" Ingresa el segundo número"));

function  operaciones(){
    if (operacion == "sumar") {
    let suma = n1+n2
    alert(`El resultado de la suma es: ${suma}` );
    } else{
    if (operacion == "restar") {
        let resta = n1 - n2
        alert(`El resultado de la resta es: ${resta}` );
    }
     else{
     if (operacion == "multiplicar") {
        let multiplicacion = n1 * n2
        alert(`El resultado de la resta es: ${multiplicacion}` );
    }
     else{
      if (operacion == "dividir") {
        let division = n1 / n2
        alert(`El resultado de la resta es: ${division}` );
    }
    else{
        alert(` ERROR` );
}
}       
}
}
    return operaciones;
}
operaciones();
