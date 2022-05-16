"use strict";
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 1] = "Lunes";
    Dias[Dias["Martes"] = 2] = "Martes";
    Dias[Dias["Miercoles"] = 3] = "Miercoles";
    Dias[Dias["Jueves"] = 4] = "Jueves";
    Dias[Dias["Viernes"] = 5] = "Viernes";
    Dias[Dias["Sabado"] = 6] = "Sabado";
    Dias[Dias["Domingo"] = 7] = "Domingo";
})(Dias || (Dias = {}));
var Meses;
(function (Meses) {
    Meses[Meses["Enero"] = 1] = "Enero";
    Meses[Meses["Febrero"] = 2] = "Febrero";
    Meses[Meses["Marzo"] = 3] = "Marzo";
    Meses[Meses["Abril"] = 4] = "Abril";
    Meses[Meses["Mayo"] = 5] = "Mayo";
    Meses[Meses["Junio"] = 6] = "Junio";
    Meses[Meses["Julio"] = 7] = "Julio";
    Meses[Meses["Agosto"] = 8] = "Agosto";
    Meses[Meses["Septiembre"] = 9] = "Septiembre";
    Meses[Meses["Octubre"] = 10] = "Octubre";
    Meses[Meses["Noviembre"] = 11] = "Noviembre";
    Meses[Meses["Diciembre"] = 12] = "Diciembre";
})(Meses || (Meses = {}));
function calcularData(dia, mes) {
    let valueDay = 0;
    let valueMes = 0;
    if (Object.values(Dias).includes(dia)) {
        valueDay = Object.values(Dias).indexOf(dia) + 1;
    }
    if (Object.values(Meses).includes(mes)) {
        valueMes = Object.values(Meses).indexOf(mes) + 1;
    }
    if (valueDay % 2 != 0 && valueMes % 2 != 0 || valueDay % 2 == 0 && valueMes % 2 == 0) {
        console.log("El usuario tiene pico y placa");
    }
}
calcularData('Miercoles', 'Diciembre');
