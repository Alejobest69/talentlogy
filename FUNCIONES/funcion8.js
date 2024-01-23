let n1 = parseInt(prompt(" Ingresa el primer número"));
let n2 = parseInt(prompt(" Ingresa el segundo número"));
let n3 = parseInt(prompt(" Ingresa el tercer número")); 

function mayor (){
    let mayor
    if (n1> n2 && n1 > n3) {
        mayor = n1
    }
    else {
    if
        (n2> n1 && n2 > n3) {
            mayor = n2
    }
    else{
        mayor = n3
    }
    }
    alert(`${mayor}`);
    console.log(mayor)
    return mayor;
}
mayor ();

    let mayor1
    if (n1> n2 && n1 > n3) {
        mayor1 = n1
    }
    else {
    if
        (n2> n1 && n2 > n3) {
            mayor1 = n2
            
    }
    else{
        mayor1 = n3
        
    }
    }

    let menor1 
    if (n1< n2 && n1 < n3) {
        menor1 = n1
    }
    else {
    if
        (n2< n1 && n2 < n3) {
        menor1 = n2
             
        }
    else{
        menor1 = n3
    }
    }

function medio (){
    let medio 
    medio = n1 + n2 + n3 - mayor1 - menor1 ;
    console.log(medio)
    alert(`${medio}`);
    return medio;
}
medio();

function menor (){
    let menor 
    if (n1< n2 && n1 < n3) {
        menor = n1
    }
    else {
    if
        (n2< n1 && n2 < n3) {
        menor = n2
             
        }
    else{
        menor = n3
    }
    }
    console.log(menor)
    alert(`${menor}`);
    return menor;
}
menor();