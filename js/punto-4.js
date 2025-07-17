import { array }from  "./arrays.js";

let invArray = [];

function invertirArray( array ){
    
    for( let i = array.length; i >= 0; i-- ){
        invArray.push( array[ i ] )
    }
};

invertirArray( array );
console.log( invArray );