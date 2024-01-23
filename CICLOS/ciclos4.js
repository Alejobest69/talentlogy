let num= parseInt(prompt("ingrese un numero del 1 al 10"));
let factorial=1; // let factorial=0;

for (let i=1;i<=num; i++){
    // if(factorial==0){
    //     factorial+=1;
    //     console.log(factorial);
    // }
    (factorial*=i)
    console.log(factorial)
}




alert(`valor factorial del numero ingresado ${factorial}`);