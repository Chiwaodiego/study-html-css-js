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


export default Citas;