// const numeros:number[] = [1, 2, 3, 4, 5];

// const nombres:string[] = ["Cris", "Fernando", "Pedro"];

// const bool:boolean[] = [true, false];

// console.log(numeros);
// console.log(nombres);
// console.log(bool);

let userId: string | number;

userId = 1212;
userId = 'name';

function getting(myText:string | number | boolean) {
    if (typeof myText === 'string') {
        console.log(`string ${myText.toLowerCase()}`);
    } else if (typeof myText === 'number') {
        console.log(`number ${myText.toFixed()}`)
    } else{
        console.log(`boolean: ${myText}`)
    }
}

getting(12);
getting("hola");
getting(true);
