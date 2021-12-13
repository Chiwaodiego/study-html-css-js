//objet litereal no tedeja crear objetos dinamicos ni tampoco objetos reutilizables
const cliente = {
    nombre: 'juan',
    saldo: 500
}

console.log(cliente);
//objet construct si puede reutiliza y es un objeto dinamico.
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    
    
}

const juan = Cliente('juan', 500);
console.log(juan);