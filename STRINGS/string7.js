let fecha = prompt('Ingrese su fecha de nacimiento con formato dd/mm/aaaa ');
function validarYFormatearFecha(fecha) {
    let regexFecha = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    let match = fecha.match(regexFecha);
    if (!match) {
        console.log("Formato de fecha incorrecto. Utiliza dd/mm/aaaa.");
        return null;
    }

    let dia = parseInt(match[1], 10);
    let mes = parseInt(match[2], 10);
    let año = parseInt(match[3], 10);

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        console.log("Fecha no válida. Verifica el día y el mes.");
        return null;
    }

    if ((mes === 2 && dia > 28) ||
        ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30)) {
        console.log("Fecha no válida. Verifica el día y el mes.");
        return null;
    }

    let fechaFormateada = dia.toString().padStart(2, '0') + '/' +
                          mes.toString().padStart(2, '0') + '/' +
                          año.toString();                      

  console.log(`
dia: ${dia} 
mes: ${mes}
año: ${año}      
`);
    return fechaFormateada ;
}
console.log(validarYFormatearFecha(fecha));
