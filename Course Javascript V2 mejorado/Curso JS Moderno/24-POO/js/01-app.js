// - existe 2 formas de crear la clase
//  esta forma se le llama  // ! class declaration
class Cliente {
// * contiene un cosntructor
    constructor(nombre,saldo)
        this.nombre = nombre;
        this.saldo = saldo;
}

//instaciar class
const juan = new Cliente('juan',400);
console.log(juan);

//  esta forma es //!class expresion
const Cliente2 = class{
    constructor(nombre,saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
//instaciar lo mismoq que objet constructor
//instaciar class
const juan2 = new Cliente2();
console.log(juan2);


