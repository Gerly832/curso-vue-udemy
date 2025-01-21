interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string; // El simbolo de pregunta es que puede como no tener un poder.
}


export const person: Hero = {
    name: 'Geraldine',
    age: 45,
    codeName: 'Ironman',
    // power: 'money'// Un superheroe puede tener algún poder
}

const {age, name, power = 'No tiene poder'} = person; // Puede ser un objeto o un Array

console.log({age, name, power})


interface createHeroaArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string; // El simbolo de pregunta es que puede como no tener un poder.
}


const createHero = ({name, age, codeName, power}: any) => ({
    id: 123456,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
}) 

console.log(createHero(person));