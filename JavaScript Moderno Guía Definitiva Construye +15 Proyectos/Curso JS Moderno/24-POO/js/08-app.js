class Cliente {

    //! clase privada, solo se puede accer atraves de una clase
        #nombre;

    // * contiene un cosntructor
        constructor(nombre,saldo){

        //* atributos
            this.#nombre = nombre;
            this.saldo = saldo;
        }	
    //* propiedades

        //! metodos
        mostrarInformacion(){
            return`Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
        }
        //!metodo static
        static bienvenido( ){
            return(`Bienvenido al cajero`)
        }

}

const juan = new Cliente('juan', 200);
console.log(juan.mostrarInformacion);
console.log(juan.#nombre); //va dar error