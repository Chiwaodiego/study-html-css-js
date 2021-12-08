
//! variables y selectores

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');







//! eventos ------------

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGastos);

}

//! clases van para objetos -------------------------

    //TODO Va menajar el valor de presupuesto y gastos
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto)
        this.gastos = [];
    }

    nuevoGasto(gasto){
        
        this.gastos = [...this.gastos,gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total,gasto) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;
        
    }

}
    //* Insertar valores ren HTML
class UI {
    insertarPresupuesto(cantidad){
        //*  extrayendo el valor
        const {presupuesto, restante} = cantidad;

        //! agregar al html
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert')

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else{ 
            divMensaje.classList.add('alert-success');
        }

        //mensaje de error
        divMensaje.textContent = mensaje;
        //insertar en el HTML 
            //* En insert before se inserto el mensaje y la posicion donde va
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar mensaje
        setTimeout(() => {
            divMensaje.remove();
        }, 1000);
    }
    agregarGastosListado(gastos){

        this.limpiarHTML(); //* elimina el html previo

        //! interar sobre los gastos
        gastos.forEach( gasto => {
        const { cantidad,nombre,id} = gasto;

        //Crear un Li
        const nuevoGasto = document.createElement('li');
        nuevoGasto.className = 'list-group-item d-flex  justify-content-between align-items-center';
        nuevoGasto.dataset.id = id;
        console.log(nuevoGasto);

        // Agregar el HTML del gasto
        nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span> `

        // Boton para borrar el gasto
        const btnBorrar = document.createElement('button');
        btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
        btnBorrar.innerHTML = 'Borrar &times;'
        nuevoGasto.appendChild(btnBorrar);

        // Agregar al HTML
        
        gastoListado.appendChild(nuevoGasto);

        })
    }

        limpiarHTML(){
            while(gastoListado.firstChild){
                gastoListado.removeChild(gastoListado.firstChild);
            }
        }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const{ presupuesto, restante} = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        //comprobando 25%
        if( (presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-succes', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-succes');
            restanteDiv.classList.add('alert-warning');
        }

        //si el ototal es 0 o menor
        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }

    
}


//* variable vaicia que va recibir el valor de presupuestoUsuario
//Instanciar
const ui = new UI();
let presupuesto;


//! funciones ------------------------


function preguntarPresupuesto() { 

    const presupuestoUsuario = prompt('Cual es tu presupuesto') ;

    

    if (presupuestoUsuario == '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

//* añade gastos
function agregarGastos(e) {
    e.preventDefault();

    // leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidades = document.querySelector('#cantidad').value;
    const cantidad = parseInt(cantidades);

    //validar
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
        return;
    } else if (isNaN(cantidad) || cantidad <= 0) {
        ui.imprimirAlerta('la cantidad no valida','error')
        return;
    }
    

    

    //* Generar un objeto con el gasto
    const gasto = {nombre , cantidad, id: Date.now}



    //* añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    //mensaje correcto
    ui.imprimirAlerta('Correcto')

    // imprimir los gastos
    const {gastos , restante} = presupuesto ;
    ui.agregarGastosListado(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    //reiniciar el formulario
    formulario.reset();
}

