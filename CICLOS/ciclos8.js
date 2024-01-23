let num= parseInt(prompt("ingrese el número al que desea calcularle su factorial"));
let factorial=1;
for (let i=1;i<=num; i++){
    (factorial*=i)
}

alert(`valor factorial del numero ingresado ${factorial}`);