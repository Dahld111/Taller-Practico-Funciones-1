import { array } from "./array.js";

function numeroMayor ( array ){
    let total = array[ 0 ];
    for( let i = 0; i < array.length; i++ ){
        if( array[ i ] < total){
            total = array [ i ]
        }
    };
    console.log( total );
};

numeroMayor( array );
// console.log( total )