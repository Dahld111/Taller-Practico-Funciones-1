const estudiantes = {
    nombre: 'Daniel',
    notas: [ 35, 45, 40 ]
}

let suma = 0;
let promedio = 0;

function promedioNotas ( estudiantes ){
    
    for( let i = 0; i < estudiantes.notas.length; i++ ){
        suma = suma + estudiantes.notas[ i ];
    }
    promedio = suma / estudiantes.notas.length;
};

promedioNotas( estudiantes );
console.log( promedio );