

boletos = prompt ("Cuanto boletos quiere comprar ?");
b1= parseInt(boletos)
dinero= 2.9
pb= .9

if (b1 <= 1 ) { alert( ("Compro 1 y su vuelto es ") + ( dinero -= pb ) ); }


else if ( b1 >1 && b1 <=2  ) { alert (("Compro 2 boletos y su vuelto es ") + (dinero -= (2**pb) ) ); }

else if ( b1 >2 && b1 <=3  ) { alert ("Compro 3 boletos y dejo el vuelto " + (dinero-=(3**pb)) );
}
