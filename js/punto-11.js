let altura = 5;
let base = 9;

function calcularAreaRectangulo ( base, altura ) {
    return base * altura;
}
function calcularPerimetroRectangulo ( base, altura ) {
    return 2*base + 2*altura;
};

const totalRectangulo = `${calcularAreaRectangulo( base, altura )} ${calcularPerimetroRectangulo( base, altura )} `;
console.log( totalRectangulo );