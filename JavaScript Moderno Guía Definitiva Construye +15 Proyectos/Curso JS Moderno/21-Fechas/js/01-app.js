const diaHoy = new Date();

let valor;

valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth(); // retorna el valor del mes actual, pero el valor incial es  0 enero dato importante.
valor = diaHoy.getHours();
valor = diaHoy.getMinutes();
valor = diaHoy.getSeconds();
valor = diaHoy.setFullYear(2010);



console.log(valor);


