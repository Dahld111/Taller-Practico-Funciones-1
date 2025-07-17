const objeto1 = {
    nombre:"mateo"
};
const objeto2 = {
    apellido:"silva"
};
const ambosObjetos = [];

function combinarObjetos ( objeto1, objeto2 ) {
    ambosObjetos.push( objeto1, objeto2 )
}

combinarObjetos( objeto1, objeto2 );

console.log( ambosObjetos );

export{ ambosObjetos };