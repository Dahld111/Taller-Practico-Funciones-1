import { array } from "./arrays.js";

function bubbleSort ( numero ){
    for( let i = 0; i < numero.length; i++ ){
        for( let c = 0; c < numero.length - i - 1; c++ ){
            if( numero[ c ] > numero[ c + 1] ) {
                [ numero[ c ], numero[ c + 1 ]] = [ numero[ c + 1 ], numero[ c ]]; 
            }
        }
    }
return numero;
};

let numerosOrdenados = bubbleSort( array );
console.log( numerosOrdenados );