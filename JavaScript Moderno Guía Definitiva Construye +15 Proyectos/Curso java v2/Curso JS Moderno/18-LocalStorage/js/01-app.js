
localStorage.setItem('diego','chi');
// 
const producto = {
    nombre : 'monitor 24 pulgadas',
    precio: 300
}
const productoString = JSON.stringify( producto);
localStorage.setItem('producto', productoString)

const meses = ['enero', 'febrero', 'marzo'];
localStorage.setItem('meses', JSON.stringify(meses));

// obtener elementos y tranformalos a objeto y arrays

const diego = localStorage.getItem('diego');
console.log(diego);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

//forma simplificada parse + get item
const meses1 = JSON.parse(localStorage.getItem('meses'));
console.log(meses1);

// eleminar objetos items  de localstorage
    localStorage.removeItem('diego');

// actualizar un registro, se podria hacer de forma automatica con funciones y metodos.

const mesesArray2 = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray2);
mesesArray2.push('nuevo mes');
console.log(mesesArray2);
localStorage.setItem('meses', JSON.stringify(mesesArray2));


// limpiar el resgistro
// localStorage.clear();