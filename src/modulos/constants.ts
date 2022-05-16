const magicNumber = 42;

const mesesAbreviatura:string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const meses:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
function findMoth(month:number) {
    if (month >= 1 && month <= 12) {
        
    }
    let monthName = mesesAbreviatura[month-1];
    monthName += ": " + meses[month-1];
    return monthName;
}

export {magicNumber, findMoth};
