import { array } from "./arrays.js";

let numerosPares = 0;

function contarPares( array ){
    for( let i = 0; i < array.length; i++){
    if( array[ i ] % 2 == 0 ) {
        numerosPares = numerosPares + 1;
        }
    };
}

contarPares( array );
console.log( numerosPares );