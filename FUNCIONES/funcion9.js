let n = parseInt(prompt('Ingrese el número'))
function fibonacci (n) {
if (n < 2) {
    return n;
}
return fibonacci(n - 1) + fibonacci(n - 2);
}
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }

 /* 3            4
   2 + 1   3    +     2
1 + 0     2 + 1  1   +  0
 */