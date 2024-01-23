let num = parseInt(prompt('Ingrese el número'));
function inver (num) {
     if(num < 10){
       return num;
     }
        let cociente = Math.floor(num / 10)
        let residuo = num%10
      return parseInt( residuo.toString() +  cociente.toString()); 
    } 

 console.log(inver(num))