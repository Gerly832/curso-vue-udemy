

const numberArray = [1,2,3,4,5]; //Declaración de un arreglo
// Si se agrega desde un principio en el Array un dato tipo string, Typescript lo va a tomar automáticamente
// con la definición de numberArray2: (number|string)[]

numberArray.push(6); // Se agrega el número 6 al arreglo original 'numberArray'

const numberArray2: (number|string)[] = [ ...numberArray ]; // Se crea un nuevo arreglo copiando todos los elementos de 'numberArray'.
// Así mismo se define que va ser tipo numerico y cadena de texto.

numberArray2.push(7); // Se agrega el número 7 al nuevo arreglo 'numberArray2'

console.log({numberArray, numberArray2}); // Se imprimen ambos arreglos como objestos para comparar. 

// Para evitar efectos secundarios en nuestro código, no permitir código que mute.
 
export {};