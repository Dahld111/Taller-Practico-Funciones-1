const listaEstudiantes = [
    { nombre: 'Ana', nota: 65 },
    { nombre: 'Carlos', nota: 91 },
    { nombre: 'Monica', nota: 48 },
    { nombre: 'Angelica', nota: 50 },
    { nombre: 'Adrian', nota: 73 }
];

function mejorEstudiante ( listaEstudiantes ) {
    let notaAlta = 0;
    let estudiante = [];
    for ( let i = 0; i < listaEstudiantes.length; i++ ) {
        if ( notaAlta <= listaEstudiantes[ i ].nota ) {
            estudiante = listaEstudiantes[ i ];
            notaAlta = listaEstudiantes[ i ].nota;
        }
    }
    console.log( estudiante.nombre )
}

mejorEstudiante( listaEstudiantes );