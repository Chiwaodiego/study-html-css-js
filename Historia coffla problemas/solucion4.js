

let gratis = false
const validarCliente = time=>{
	let edad = prompt("Que edad tenes?");
	if (edad > 17){
		if ( time >= 2 && time <=7 && gratis == false ){
			alert("Podes pasar gratis");
			gratis= true;
		} else {alert("Podes pasar pero tenes que pagar la entrada");
		}

	}else {alert("no podes pasar menor de edad");

	}
}
validarCliente(23)
validarCliente(2)
validarCliente(3)



const AsistenciaAlumno = Asist=>{
	if(asist >= 27){
		alert("Su condicion de regularidad es normal")
	}
}

("nombre del alumnos " +(i+1))