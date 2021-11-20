let cantidad = prompt("Cuanto alumno son?");
let alumnosTotales = [];



 for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];

}

const asistencia = (nombre,p)=>{
	let posicion = p
	let presencia = prompt(`Esta ${nombre}?`);
	if ( presencia == "p"){
	alumnosTotales[posicion][1]++
	}
}
 for (i = 0 ; i < 3 ; i++) {
	for ( alumno in alumnosTotales) {
		asistencia(alumnosTotales[alumno][0],alumno)
	}
}

for ( alumno in alumnosTotales )
	for ( let alumno of alumnosTotales)






document.write(`${alumnosTotales[0]} <br>`);

document.write(`${alumnosTotales[1]} <br>`);