let num = parseInt(prompt(" Ingresa el número"));
function tabla (){
    let x = 0;
    for (let i = 0; i <= 20 ; i++) {
        x = num*i
        console.log(x)
}
    alert(`La tabla es : ${x}` );
    return tabla;
}
tabla();

