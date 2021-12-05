
class Calculadora { 
	constructor(){}
		sumar(num1,num2){
		return  parseInt(num1) +  parseInt(num2);
		}
		restar(num1,num2){
		return  parseInt(num1) -  parseInt(num2);
		}
		dividir(num1,num2){
		return  parseInt(num1) /  parseInt(num2);
		}
		multiplicar(num1,num2){
		return  parseInt(num1) *  parseInt(num2);
		}
		potencias(num1,num2){
			return Math.pow(num1,num2);
		}
		raizcuadrada(num1){
			
			return Math.sqrt(num1);
		}
		raizcubica(num1){
			 
			return Math.cbrt(num1);
		}


}
const calculadora = new Calculadora();  
alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: división,  4: multiplicación, 5: Potencias, 6: Raiz cuadrada, 7: Raiz cubica");







if (operacion == 1) {
	let numero1= prompt("Ingrese el  primer número para la operacion");
	let numero2= prompt("Ingrese el  segundo número para la operacion");
	resultado = calculadora.sumar( numero1, numero2);
	alert(`tu resultado es ${resultado}`);

}
else if (operacion == 2) {
	resultado = calculadora.restar( numero1, numero2)
	alert(`tu resultado es ${resultado}`);
	let numero1= prompt("Ingrese el  primer número para la operacion");
	let numero2= prompt("Ingrese el  segundo número para la operacion");
}
else if (operacion == 3) {
	let numero1= prompt("Ingrese el  primer número para la operacion");
	let numero2= prompt("Ingrese el  segundo número para la operacion");
	resultado = calculadora.dividir( numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	let numero1= prompt("Ingrese el  primer número para la operacion");
	let numero2= prompt("Ingrese el  segundo número para la operacion");
	resultado = calculadora.multiplicar( numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
	let numero1= prompt("Ingrese el  primer número para la operacion");
	let numero2= prompt("Ingrese el  segundo número para la operacion");
	resultado = calculadora.potencias( numero1, numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
	let numero1 = prompt("Ingrese el número para la operacion");
	resultado = calculadora.raizcuadrada( numero1)
	alert(`tu resultado es ${resultado}`);

}
else if (operacion == 7) {
	let numero1 = prompt("Ingrese el número para la operacion");
	resultado = calculadora.raizcubica( numero1)
	alert(`tu resultado es ${resultado}`);
}
else {
	alert("no se ha encontrado la operación")
	
}

