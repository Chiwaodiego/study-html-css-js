const carrito = new Set();

carrito.add('camisa');
carrito.add('toalla');
carrito.add('dedo ');
carrito.add('camisa');
carrito.add('camisa');


console.log(carrito.delete('camisa'));

// Del sigueinte arreglo, eliminar los duplicados
const numeros = [1,2,3,1,4]
const noDuplicados = new Set(numeros);
console.log(noDuplicados); //Eso elimina los duplicados.