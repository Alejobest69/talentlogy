let celsius = parseFloat(prompt("Ingresa la temperatura en celsius "));
alert('Elige una opción de conversión: Fahrenheit o Kelvin');
let temperatura = prompt("Ingresa la opción elegida");
function  conversion(){
    if (temperatura == "fahrenheit") {
    let fahrenheit = (9 * celsius)/5 + 32
    alert(`La temperatura en fahrenheit es: ${fahrenheit}` );
    } else{
    if (temperatura == "kelvin") {
        let kelvin = celsius + 273.15
        alert(`La temperatura en kelvin es: ${kelvin}` );
    }
     
    else{
        alert(` ERROR` );
}
}       
    return conversion;
}
conversion();
