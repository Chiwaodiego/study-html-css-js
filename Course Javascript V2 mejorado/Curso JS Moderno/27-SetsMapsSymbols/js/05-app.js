const sym = Symbol('1')
const sym2 = Symbol('1')


// los symbol son diferentes y unicos
// if (sym === sym2) {
//     console.log('son iguales')
// } else{
//     console.log('Son diferentes')
// }

//----------
// retorna false
// console.log(Symbol() === Symbol() );

const nombre = Symbol();
const apellido = Symbol();


const persona = {};

//agregar nombre y apellido como llaves del objeto

persona[nombre] = 'juan';
persona[apellido] = 'pedro';
persona.tipoCliente = 'Premiun';
persona.saldo = 500;

console.log(persona);
// console.log(persona[nombre]); // para acceder a los valores se usa []
//!Las propiedades que utilizan un Symbol no son iterables.
for ( let i in persona){
    console.log(i);
}

// Definir una descripcion del symbol
const  nombrecliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombrecliente] = 'Pedro';

console.log(cliente); // accede al objeto completo
console.log(cliente[nombrecliente]); // accede al valor Pedro
console.log(nombrecliente); // accede a la descricion