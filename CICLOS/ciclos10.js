let contador=0;
for (let i=1;i<=12; i++){
    let ahorro = parseInt(prompt("ingrese la cantidad de su ahorro"));
    console.log(ahorro)
     contador+= ahorro 
     console.log(' la cantidad que lleva en el mes ' + i + ' es de:'+contador)
    
}
alert(` El total de su ahorro en un año es  :  ${contador}`);