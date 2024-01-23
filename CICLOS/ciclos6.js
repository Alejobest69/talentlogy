let num = parseInt(prompt("ingrese el número"));
let num1 = 0
let num2 = 1
let r = 0;
for (let i = 0; i <= num ; i++) {
    r= num1 + num2
    num1 = num2
    num2 = r
console.log(r);
}
alert(`El resultado del calculo es: ${r}`);