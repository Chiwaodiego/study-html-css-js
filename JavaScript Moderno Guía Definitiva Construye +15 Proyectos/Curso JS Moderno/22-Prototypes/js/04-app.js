function Cliente(nombre, saldo) {
    this.nombre = nombre;
        this.saldo = saldo;}                  
Cliente.prototype.tipoCliente =  function () {
    let tipo;
    if (this.saldo > 10000) {
        tipo = 'Gold';        
    } else if  (this.saldo > 5000) {
        tipo = 'Platium';        
    }  else{ tipo = 'Normal';}
        return tipo;                    
}                
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre} , Saldo: ${this.saldo} , Tipo de Cliente: ${this.tipoCliente()}`
}                
Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira
}      


function Persona(nombre, saldo, telefono) {
    //formas de heredar
    Cliente.call(this, nombre,saldo);
    this.telefono = telefono;
}

//Para heradar las funciones de Cliente, object.create va copiar las fucniones y pasar a Persona. Pero se pierde el cosntructor, en la siguiente fucnion se arregla
// primero pasar las herancias antes de instanciarlo.
Persona.prototype = Object.create(Cliente.prototype);
//con esto pasa el cosntructor del cliente a Persona
Persona.prototype.constructor = Cliente;

//instanciarlo
const Juan = new Persona('Juan',5000, 3255412412);
console.log(Juan);

// como Persona ya heredo las funciones de cliente se isntancia 

console.log(Juan.nombreClienteSaldo());

//  Tambien debe saber que cliente no toma ningun funcion de persona

Persona.prototype.mostrarTelefeno = function () {
    return `El telefeno de esta persona es ${this.telefono}`
}

console.log(Juan.mostrarTelefeno());