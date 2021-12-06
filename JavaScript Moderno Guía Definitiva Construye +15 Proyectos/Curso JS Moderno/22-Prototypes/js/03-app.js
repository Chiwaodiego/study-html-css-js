function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;   
} 


//crear funciones Exclusivas dentro del prototype
// Diferencias entre arrow y funcionst
// functions busca en el objeto actual
// arrow busca en la ventana global
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

// instaciarlo

const pedro = new Cliente('Pedro',6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());
console.log(pedro);



function Empresa(nombre, saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;   
    this.categoria = categoria;
} 

const CCJ = new Empresa ( 'Codigo con juan', 4000, 'Cursos en Linea');

