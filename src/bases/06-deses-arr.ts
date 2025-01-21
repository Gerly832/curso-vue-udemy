
const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [g, v] = character; // La cantidad de caracteres que se agreguen corresponden
// a la posición uno en uno de listado anterior

console.log({g, v});



const returnArray = () => {
    return [123, 'ABC'] as const;
}

const [numbers, letters] = returnArray();

console.log(numbers * 2, letters.toLowerCase);








