//funcion de operaciones

const sumar = (num1,num2) =>{
	return parseInt(num1) + parseInt(num2)}
const restar = (num1,num2) =>{
	return parseInt(num1) - parseInt(num2)}
 const multiplicar = (num1,num2) =>{
	return parseInt(num1) * parseInt(num2)}
 const dividir = (num1,num2) =>{
	return parseInt(num1) / parseInt(num2)}

var opcion = prompt("ingrese opcion de calculo 1 sumar - 2 restar - 3 multiplicar - 4 dividir")

if (opcion >= 1 && opcion <= 4) {
	var num1 = prompt("Ingre numero 1 a operar");
	var num2 = prompt("Ingre numero 2 a operar");
   	document.write("Resultado :  ")
   	if ( opcion == 1){
		document.write(sumar(num1,num2));}
	if ( opcion == 2){
	document.write(restar(num1,num2));}
	if ( opcion == 3){
	document.write(multiplicar(num1,num2));}
	if ( opcion == 4){
	document.write(dividir(num1,num2));}	
	else {
		alert("Codigo invalido ")
	}
	}
		else {
		alert("Codigo invalido ")	}