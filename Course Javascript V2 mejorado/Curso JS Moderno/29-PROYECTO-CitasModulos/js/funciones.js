import Citas from './classes/Citas.js';
import UI from './classes/UI.js';

import { mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario} from './selectores.js'


let editando;

const ui = new UI();
const administrarCitas = new Citas();

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
export function datosCita(e) {
    citaObj[ e.target.name] = e.target.value;
}

//Valida y agrega una nueva cita a la clase de citas
export function nuevaCita(e) {
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

export function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

export function eliminarCita(id) {
    //Eliminar la cita
    administrarCitas.eliminarCita(id);

    // muestre un mensaje
    ui.imprimirAlerta('La cita se elimino')

    // Refrescar las citaas
    ui.imprimirCitas(administrarCitas);
}

// cargar los datos y modo edicion
export function cargarEdicion(cita) {
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