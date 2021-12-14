const cliente = new Map();

cliente.set('nombre','karen');
cliente.set('tipo','premiun');
cliente.set('saldo',30);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));

cliente.delete('saldo');

console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

// - Tambien reescribir arrays dentro de un map
const paciente = new Map([ ['nombre','paciente'],['cuarto','no definido']]);
paciente.set('dr','Dr asignado'); //agrega
paciente.set('nombre','Antonio'); //lo reescribe
// - Son iterables 
    paciente.forEach((datos, index) => {
        console.log(index);
    });