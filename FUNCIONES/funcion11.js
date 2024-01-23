let n = parseInt(prompt('Ingrese el número'));
function conver (n) {
     if(n === 0){
       return " si su numero entero es 0 entonces convertido a binario es 0, si no su número ingresado a binario es : ";
     }
     else{
     const cociente = Math.floor(n / 2)
     const residuo = n%2
     
      return conver(cociente)+residuo;  
    }  
}
 console.log(conver(n))