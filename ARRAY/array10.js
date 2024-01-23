let matriz = [
[3, 6, 9, 12, 15],
[4, 8, 12, 16, 20],
[5, 10, 15, 20, 25],
[6, 12, 18, 24, 30],
[7, 14, 21, 28, 35]          
]

function sumarFila(fila) {
    return fila.reduce(function(suma, elemento) {
        return suma + elemento;
    }, 0);
}
    function sumarFilas(matriz) {
        return matriz.map(function(fila) {
            return sumarFila(fila);
        });
    }
    let sumaDeFilas = sumarFilas(matriz);
    console.log(sumaDeFilas);
    
    function sumarColumna(matriz, indiceDeColumna) {
        return matriz.reduce(function(suma, fila) {
            return suma + fila[indiceDeColumna];
        }, 0);
    }
    
    function sumarColumnas(matriz) {
        let numColumnas = matriz[0].length;
        let resultado = [];
        
        for (var i = 0; i < numColumnas; i++) {
            resultado.push(sumarColumna(matriz, i));
        }
        
        return resultado;
    }
    
    let sumaDeColumnas = sumarColumnas(matriz);
    console.log(sumaDeColumnas);