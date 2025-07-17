import { array } from "./arrays.js";

function sumar ( array ){
    let suma = 0
    for( let i = 0; i < array.length; i++ ){
        suma = suma + array[ i ];
    }
    return suma
}

const resultado = sumar( array );

console.log( resultado );