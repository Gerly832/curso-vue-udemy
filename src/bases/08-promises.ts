import { getHeroById } from "./07-imp-let";

// // Código asincronico se refiere a promesas u observables.

// console.log('Inicio');

// // Resolve => Cuando se cumple con la promesa.
// // Reject => Cuando no se cumple con la promesa.

// new Promise (( resolve, reject ) => {
//     // console.log('Cuerpo de la promesa');
//     setTimeout(() => {

//         reject('Mi amigo no cumplió');
//    }, 1000);
// })
//     .then(( messaje ) => console.log( messaje ))
//     .catch( errorMessaje => console.log( errorMessaje ))
//     .finally( () => console.log('Fin de la promesa') );

// console.log('Fin')

// Argumentos de promesas

const getHeroByIdAsync = ( id: number ) => {
    return new Promise( resolve => {
        setTimeout(() => {
            getHeroById( id );
        }, 1500);
    })
}
