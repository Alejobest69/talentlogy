let frase = prompt("Ingrese una frase y después una vocal ");
let separar = frase.split(" ");
let invertirFrase = separar.reverse();
let ultimaPalabra = invertirFrase[0]; 
let fraseSinVocal = invertirFrase[1]
let ultimaLetra = ultimaPalabra.slice(-1);
let vocalMayus = ultimaLetra.toUpperCase();

if (/[aeiouAEIOU]/.test(vocalMayus)) {
    console.log(`${fraseSinVocal} ${vocalMayus}`);
} else {
    console.log("La última letra no es una vocal");
}
