import heroes, { owners } from "../data/heroes";

// console.log( heroes, owners );


// export onst getHeroById = ( id:number ) => {
//     return heroes.find( hero => hero.id == id );
// }

// console.log( getHeroById(2) )

export const getHeroByOwner = ( owner: 'DC' | 'Marvel' ) => {
    return heroes.filter( hero => hero.owner == owner )
}

console.log( getHeroByOwner('Marvel'))
// JavaScript es sensible




