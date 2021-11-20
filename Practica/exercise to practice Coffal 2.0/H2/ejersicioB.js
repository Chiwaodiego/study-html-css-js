let cantidad = prompt("Cuanto alumno son?");
let alumnosTotales = [];
var dias = 30


 for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];

}

const asistencia = (nombre,p)=>{
	let posicion = p;
	let presencia = prompt(`Esta ${nombre}?`);
	if ( presencia == "p"){
	alumnosTotales[posicion][1]++;
	}
}
 for (i = 0 ; i < dias ; i++) {
	for ( let alumno in alumnosTotales) {
		asistencia(alumnosTotales[alumno][0],alumno);
	}
}


for ( let alumno in alumnosTotales){
		document.write(`
		Nombre del alumno: ${alumnosTotales[alumno][0]} <br>
		Asistencia: ${alumnosTotales[alumno][1]} <br>
		Ausentes: ${dias - alumnosTotales[alumno][1]} <br>
		<br>`);
	if (alumnosTotales[alumno][1]  >= 18){
		document.write(`
		<b>Aprobaste, seguis regularizado</b><br>
		<br>
		`);
	}
	else {
		document.write(`
		<b>Desaprobaste Por inasistencia</b><br>
		<br>
		`);
	
		}
	}



