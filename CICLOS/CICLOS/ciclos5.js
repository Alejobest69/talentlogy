let num = parseInt(prompt("ingrese el número"));
let suma=1

for (let i=1;i<=num; i++){
    (suma+=i)
    console.log(suma)
}
alert(` El resultado de la suma es:  ${suma}`);