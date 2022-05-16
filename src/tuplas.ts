let myArray: [string, boolean, number][] = [];

function llenarArray(data: [string, boolean, number]) {
    myArray.push(data);
}

function mostarArray(array:[string, boolean, number][]) {
    console.log("ARRAY COMPLETO: ", array)
}

function mostrarElemento(array:[string, boolean, number][]) {
    console.log("\nTUPLAS: ")
    array.forEach(tuple => {
        console.log(tuple)
    });
}

function mostrarAtributos(array:[string, boolean, number][]) {
    console.log("\nATRIBUTOS: ")
    array.forEach(tuple => {
        console.log("\nTUPLA: ")
        tuple.forEach(atributo => {
            console.log(atributo)
        });
    });
}

llenarArray(['hola', true, 2]);
llenarArray(['adios', false, 4]);
llenarArray(['xd', true, 1]);
llenarArray(['mundo', false, 23]);
llenarArray(['ejemplo', false, 23]);

mostarArray(myArray);
mostrarElemento(myArray);
mostrarAtributos(myArray);




