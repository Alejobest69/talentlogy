let person1 = parseInt(prompt(" Ingresa el primer número"));
let person2 = parseInt(prompt(" Ingresa el segundo número"));
let person3 = parseInt(prompt(" Ingresa el tercer número"));
let mayor,intermedio,menor 

/*mayor */

if (person1> person2 && person1 > person3) {
    console.log("entro al if")
    mayor = person1
}
else {
if
    (person2> person1 && person2 > person3) {
        mayor = person2
        console.log("entro al if")
}
else{
    mayor = person3
    console.log("entro al if")
}
}

/*menor */


if (person1< person2 && person1 < person3) {
    console.log("entro al if")
    menor = person1
}
else {
if
    (person2< person1 && person2 < person3) {
        console.log("entro al if")
    menor = person2
         
    }
else{
    menor = person3
    console.log("entro al if")
}
}
/*intermedio */
intermedio = person1 + person2 + person3 - mayor - menor ;
alert(` 
        mayor     : ${mayor}
        intermedio: ${intermedio}
        menor     : ${menor}
        `);
 