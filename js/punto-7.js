const listaEstudiantes = [
    { nombre: 'Ana', nota: 65 },
    { nombre: 'Carlos', nota: 91 },
    { nombre: 'Monica', nota: 48 },
    { nombre: 'Angelica', nota: 50 },
    { nombre: 'Adrian', nota: 73 }
]

let estudiantesAprobados = [];

function aprobados ( listaEstudiantes ){
    for( let i = 0; i < listaEstudiantes.length; i++ ){
        if( listaEstudiantes[ i ].nota >= 60 ){
            estudiantesAprobados.push( listaEstudiantes[ i ].nombre )
        }
    }
}

aprobados( listaEstudiantes );

console.log( ` Los estudiantes con nota mas de 60 son: ${ estudiantesAprobados } ` );