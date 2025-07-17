import { array } from "./arrays.js";

let numeroPrompt = prompt( 'Ingrese un número' )

function buscarElemento ( array, numeroPrompt ){
    for( let i = 0; i < array.length; i++ ){
        if( array[ i ] == numeroPrompt ){
            console.log( 'true' )
            break;
        }
        // else{
        //     console.log( false )
        // }
    }
}

buscarElemento( array, numeroPrompt );