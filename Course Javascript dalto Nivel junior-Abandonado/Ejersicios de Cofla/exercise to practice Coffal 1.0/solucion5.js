

 let cantidad = prompt("Cuantos alumnos son?");
 let alumnosTotales= [];

 for (i = 0; i < cantidad; i++) {
 	alumnosTotales[i] =[prompt (`nombre del alumnos ${(i+1)}`),0]
 }

 const tomarAsist = (nombre,p)=>{
 	let presencia = prompt(nombre);
 	if (presencia =="p" || presencia =="P"){
 		alumnosTotales[p][1]++;
 	}
 }

 for ( i = 0; i < 30 ; i++){
 	for (alumno in alumnosTotales)  {
 		tomarAsist(alumnosTotales[alumno][0],alumno);
 }
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}: <br>
	___Presentes: ${alumnosTotales[alumno][1]} <br>
	___Ausentes: ${30 -alumnosTotales[alumno][1]} `; 
	if (30 - alumnosTotales[alumno][1]>=3){
		resultado+= "Reprobado por inasistencias <br><br> ";}
	else { resultado+= "<br><br>"}
		document.write(resultado)
}