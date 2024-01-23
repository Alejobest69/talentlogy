let num = 5
let miArray = Array.from({ length: num }, function() {
    return Math.floor(Math.random() * 10);
});
console.log(miArray);
let centro = miArray[2];
console.log(centro)