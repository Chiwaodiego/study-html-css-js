// WeakSet
const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}


const nombre = 20;

weakset.add(cliente);


console.log(weakset.has(cliente));