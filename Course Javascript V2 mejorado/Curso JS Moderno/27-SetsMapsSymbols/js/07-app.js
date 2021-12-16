// para indentifica un genredor tienne que tener *
function *crearGenerador() {
    // la palabra yield son valores
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}
// const iterador = crearGenerador();
// cada next para recorrer el siguiente elemento
// los metod value y done retorna falso hasta que no halla mas elemento y retorne true.
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());

// generador para carrito de compras
function *generadorCarrito(carrito) {
    for(let i = 0; i < carrito.length; i++)
    yield carrito[i];
}
const carrito = ['Pro1','Pro2','Pro3']
const iterador = generadorCarrito(carrito);
console.log(iterador.next());
