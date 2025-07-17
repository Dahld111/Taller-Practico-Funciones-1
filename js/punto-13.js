import { array } from "./arrays.js";

function eliminarDuplicados ( array ) {
    return new Set( array )   
}

console.log( eliminarDuplicados( array ) );