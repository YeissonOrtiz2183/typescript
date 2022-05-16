let tallaCamisa: string;

tallaCamisa = 'S';
tallaCamisa = 'M';
tallaCamisa = 'LLLL';
tallaCamisa = 'XL';

let tallaCamisa2: 'S' | 'M' | 'L' | 'XL';

tallaCamisa2 = 'S';

type tallaCamisa3 = ('S' | 'M' | 'L' | 'XL');
type userId = string | number;

function greet(parametro1: userId, parametro2: tallaCamisa3){
  console.log(`User id: ${parametro1}`)
  console.log(`Shirt size: ${parametro2}`)
}

greet(1, 'S')
