// objet construct si puede reutiliza y es un objeto dinamico

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;   
} 

const juan = new Cliente('juan', 500);
console.log(juan)

function formatearCliente(Cliente) {
    const {nombre, saldo} = Cliente;
    return 'El Cliente ${nombre} tiene un saldo de ${saldo}';
}

function formatearEmpresa(Empresa) {
    const {nombre, saldo,categoria} = Empresa;
    return 'El Cliente ${nombre} tiene un saldo de ${saldo} y pernetece a la categoria ${categoria}';
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;   
    this.categoria = categoria;
} 

const CCJ = new Empresa ( 'Codigo con juan', 4000, 'Cursos en Linea');
console.log(formatearEmpresa(CCJ));


