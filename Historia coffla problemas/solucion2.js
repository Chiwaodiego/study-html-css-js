

boletos = prompt ("Ingrese su dinero para la compra	?");
b1= parseInt(boletos)
pb= 1

if (boletos <= 1 ) {alert( "le alcanza para 1 boleto y su vuelto es " + ( b1 += 1) ) }

else if (dinero/boleto >= 1 && dinero/boleto < 2) {
	vuelto = dinero - boleto;
	alert("comprar 1 y el vuelto es: " + vuelto);
}

else if (dinero/boleto >= 2 && dinero/boleto < 3){
	vuelto = dinero - boleto*2;
    alert("comprar 2 y el vuelto es: " + vuelto);
}

else {
	vuelto = dinero - boleto*2;
    alert("comprar dos y el vuelto es: " + vuelto + ", regalarlo")
}