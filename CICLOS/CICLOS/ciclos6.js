let num = parseInt(prompt("ingrese el número"));
let suma=0;
for (let i=1;i<=num; i++){
    suma +=1/i
    console.log(suma)
}
alert(` El resultado de la suma es:  ${suma}`);