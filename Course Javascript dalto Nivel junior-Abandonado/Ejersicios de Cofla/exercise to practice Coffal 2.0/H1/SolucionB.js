var cofla = prompt('Ingrese su dinero');

if (cofla >= 50 && cofla <= 99) {
	let r = cofla - 50;
	alert(`le al alcanza para 1 y le sobra ${r} pesos`);
}
else if (cofla >= 100 && cofla <= 149) {
	let r = cofla - 100;
	alert(`le al alcanza para 2 y le sobra ${r} pesos`);
}
else if (cofla >= 150 ) {
	let r = cofla - 150;
	alert(`le al alcanza para 3 y le sobra ${r} pesos`);
}
else  {
	alert(`Lo siento no le alcanza para comprar el boleto de loteria`);
}