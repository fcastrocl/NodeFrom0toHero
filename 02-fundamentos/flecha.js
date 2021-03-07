// funciones tradicional

function sumar(a, b) {

    return a + b;
}
console.log(sumar(5, 10));


function sumar2(a, b = 15) {

    return a + b;
}
console.log(sumar2(5));


// Funciones de flecha

const sumar3 = (a, b = 10) => {
    return a + b;
}

const sumar4 = (a, b) => a + b;

console.log((sumar3(4)));

console.log((sumar4(5, 2)));

const saludar = () => 'Hola mundo';

console.log(saludar());