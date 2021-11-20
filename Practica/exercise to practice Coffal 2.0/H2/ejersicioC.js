const sumar = (num1,num2)=>{
	return  (num1) +  (num2);
}
const restar = (num1,num2)=>{
	return  (num1) -  (num2);
}
const dividir = (num1,num2)=>{
	return  (num1) /  (num2);
}
const multiplicar = (num1,num2)=>{
	return  (num1) *  (num2);
}


alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: división,  4: multiplicación");

let numero1= prompt("Ingrese el  primer número para la operacion");
let numero2= prompt("Ingrese el  segundo número para la operacion");
let n1 = parseInt(numero1)
let n2 = parseInt(numero2)

if (operacion == 1) {
	resultado = sumar( n1, n2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
	resultado = restar( n1, n2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
	resultado = dividir( n1, n2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	resultado = multiplicar( n1, n2)
	alert(`tu resultado es ${resultado}`);
}
else {
	alert("no se ha encontrado la operación")
}