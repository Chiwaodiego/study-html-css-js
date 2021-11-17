
var p1 = prompt("Ingrese su monto cofla");
var p2 = prompt("Ingrese su monto roberto");
var p3 = prompt("Ingrese su monto juan");

if  ( p1 >= 350 ) {
	let resto = p1 - 350 ;
	document.write (` Cofla le alacanza para un helado de 3 bochas o licuado y te sobran 
		${resto} pesos `);
}

else if ( p1 >= 200 ) {
	let resto = p1 - 200 ;
	document.write (`Cofla le  alacanza para un helado de 2 bochas y te sobran  
		${resto} pesos `);
}
else if (p1 >= 100 ) { 
	let resto = p1 - 100 ;
	document.write (` Cofla le  alacanza para un helado de 1 bocha y te sobran  
		${resto} pesos `);

}

else { 
	document.write (` No le alacanza para ningun de los helados`)
}



if  ( p2 >= 350 ) {
	let resto = p2 - 350 ;
	document.write (`Roberto le alacanza para un helado de 3 bochas o licuado y te sobran 
		${resto} pesos `);
}

else if ( p2 >= 200 ) {
	let resto = p2 - 200 ;
	document.write (`Roberto le  alacanza para un helado de 2 bochas y te sobran  
		${resto} pesos `);
}
else if (p2 >= 100 ) { 
	let resto = p2 - 100 ;
	document.write (`Roberto le  alacanza para un helado de 1 bocha y te sobran  
		${resto} pesos `);

}

else { 
	
	document.write (` No le alacanza para ningun de los helados`)}