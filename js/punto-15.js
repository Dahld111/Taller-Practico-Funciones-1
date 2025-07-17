const password = prompt('Ingrese su contraseña')
    let passwordLength = false;
    let passwordMayuscula = false;
    let passwordNumero = false;


function validarPassword( password ) {

    if ( password.length >= 8 ) {
        passwordLength = true
    };

    for ( let i = 0; i < password.length; i++ ) {
        let letra = password[i];
        if ( letra == letra.toUpperCase() ) {
            passwordMayuscula = true;
            break;
        }
    }

    for ( let i = 0; i < password.length; i++ ) {
        if ( !isNaN( password[ i ] ) && password[ i ] !== ' ') {
            passwordNumero = true;
            break;
        }
    }
}

validarPassword( password );

if ( passwordLength && passwordMayuscula && passwordNumero == true ) {
    console.log( 'true' )
}
else {
    console.log( 'false' )
}