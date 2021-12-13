
//variables
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');


//! UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

//TODO ui globales
class Citas{
    constructor(){
        this.citas = []
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];

    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id)
    }
    editarCita(citaActualizada){
        // usar map permite reescribir sobre el array y nos ahorramos de reacignar
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
    }


}

class UI{

    imprimirAlerta(mensaje,tipo){
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert','d-block','col-12');

        // Agregar clase en base al tipo error

        if (tipo === 'error') {
            
            divMensaje.classList.add('alert-danger');            
        } else {
            
            divMensaje.classList.add('alert-success');
        }
        // mensaje de error
        divMensaje.textContent = mensaje;
        
        //agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //quitar la alerta
        setTimeout(() => {
            divMensaje.remove();
        }, 1000);
    }

    imprimirCitas({citas}){

        this.limpiarHTML();
        citas.forEach( cita => {
            const {mascota, propietario, telefono, fecha,hora, sintomas, id} = cita;

            const divCita =  document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            //* Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-tittle', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
            <span class="font-weight-bolder-">Propietario: </span> ${propietario} `;
            const telefenoParrafo = document.createElement('p');
            telefenoParrafo.innerHTML = `
            <span class="font-weight-bolder-">Telefono: </span> ${telefono} `;            
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
            <span class="font-weight-bolder-">Fecha: </span> ${fecha} `;
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
            <span class="font-weight-bolder-">Hora: </span> ${hora} `;
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
            <span class="font-weight-bolder-">Sintomas: </span> ${sintomas} `;
            
            // Boton para elminar esta cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg> ' ;
            btnEliminar.onclick = () => eliminarCita(id);


            //añade un boton apra editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>';
            btnEditar.onclick = () => cargarEdicion(cita);

            //Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefenoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);


            //agregar las citas al HTML
            contenedorCitas.appendChild(divCita);


        })
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }

}




const ui = new UI();
const administrarCitas = new Citas();

//! eventos

    // registrar evento
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}


//!class para funciones


//! objeto 
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//! funciones

// agrega datos al objeto cita
function datosCita(e) {
    citaObj[ e.target.name] = e.target.value;
}


//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
    e.preventDefault();
    const {mascota, propietario, telefono, fecha,hora,sintomas} = citaObj;
    
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
        return;
    } 

    if (editando) {
        ui.imprimirAlerta('Editado Correctamente')

        // Pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj})

        // regresar el texto del boton a su estado original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        //quitar modo edicion
        editando = false;


    } else{
        //generar un Id unico
        citaObj.id = Date.now();
        
        
        //creando una nueva cita.
        //! es importante poner una copia porque si no va reiscribir el objeto global
        administrarCitas.agregarCita({...citaObj});

        // mensaje de agreado correctamente
        ui.imprimirAlerta('Se agrego correctamente');

    }


  
    //reiniciar el Objeto para la validacion
    reiniciarObjeto();

    //reiniciar el formulario
    formulario.reset();

    //mostrar el HTML de las citas
    ui.imprimirCitas(administrarCitas);

}

function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id) {
    //Eliminar la cita
    administrarCitas.eliminarCita(id);

    // muestre un mensaje
    ui.imprimirAlerta('La cita se elimino')

    // Refrescar las citaas
    ui.imprimirCitas(administrarCitas);
}

// cargar los datos y modo edicion
function cargarEdicion(cita) {
    const {mascota, propietario, telefono, fecha,hora,sintomas,id} = cita;

    //llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
    id.value = id;

    // llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
    

    // cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}


