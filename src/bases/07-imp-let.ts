import heroes, { Owner } from "../data/heroes";

// console.log( heroes, owners );


export const getHeroById = ( id:number ) => {
    return heroes.find( hero => hero.id == id );
}

// console.log( getHeroById(2) )

// export const getHeroByOwner = ( owner: Owner ) => {
//     return heroes.filter( hero => hero.owner == owner )
// }

// console.log( getHeroByOwner('DC'))
// JavaScript es sensible




