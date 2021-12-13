

let free = false;

const edad = (time)=> {
	let edad = prompt("ingrese su edad") ;
	if (edad >= 18) {
		if (time >= 2 && time <7  && free == false) {
		alert("Podes pasar y no pagas entrada sos el primero en pasar despues de las 2am.");
		free = true;
	}
	else { alert( "Pasa pero tenes que pagar la entrada")}

		}

	else { alert("No puede pasar es menor de edad")
	}
}



edad(3);
edad(3);