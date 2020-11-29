*/alert("hola")*/
4)variables
tipos de datos
string= "cadena texto"
number= 21
booleano= true or false
symbol=
img=
; se para variables
, cadena de variables
las variables se puede escribir junto ejem: let n1 = 2, n2 = 4; para ahorrar codigo 
var number = 15; "ocupado todo el bloque( que puede se usado en cada lugar del espacio del bloque o afuera)"
let number = "se usa numero pero nos limita el alcanse del bloque( solo se trabaja dentro del bloque en uso de operaciones";
const = "es una variable que nunca cambia su valor";
scope es una condicion o ambito que es valida por dentro de la variable a fuera no;
hoisting ;

casos especiales de datos:
undefined
null se aclara que es una var vacia pero es nula, let n1 = null;
nan "no se puede operar con letras"

prompt es un funcion para almacenar datos y luegos se puede pedir

5)Operadores en javascript
-Operadores de asignacion (IMG)
	asigna un valor al operando de la izquierda basadoe n el valor del operando de la derecha
	ej 
	let n= 10;
	n +=5
	ej 
	%= te muesta 0 o el numero entero del resto
	document.write(n)
-Operadores Aritméticos(IMG)
	toman valores numericos(ya sean literales o variables) como sus operandos y retornan un valor numerico unico.
	let num1 = 10;
	let num2 = 5;
	let num1 --;
	result = num1;
	alert(result)
	ej exponecial result = num1**2;
	negativo 	result = -num1;

6) --concatenacion
	 es apilar variables , cuando pones suma + text lo lee lineal
	  variable= number1.concat(number2) si o si tiene que tener UN string de text
	  otra forma de concat un string son bacticks
	  v1 = "Diego"
	  v2=  `soy ${v1} y estoy volando`
	document.write(v2);

8) -- operadores (intermedio)
	-operadores logicos(img) los operadores logicos nos devuelven un resultado a apartir de quese cumpla (o no)
							una condicion, su resultado es vbooleano, ysus operandosson 
							valores logicos o asimilables a ellos.
	and &&
	or ||
	not ! loc contrario


	-operadores de comparacion(img) comparan dos expresiones y devuelven 
									un boolean que representa  la relacion de sus valores.
	let n1 = 2;
	let n2 = 3;
		== iguala, y tambien = text and number
		!= (desigualdad) 
		=== indentidad igual strictamente
		!== desigualdad strictamente te muestra verdadedor si son disntintos
		< > <= => 
9) --camel case
	- Definicion(img)
	- usos
	- Ejemplos
	Camelcase es escrbir un codigo con minisculaLuegoCadaPalabraQueSigueEsConMayuscula.
10) --Condicionales ej
					if(103<=15){ alert("hola")}
	- if
	- else if
	- else
------- CAPITULO 2 ---------

arrays = 
		-definicion  y usos sirve para almacenar datos dentro []
		-formas de crear un arrays
	let variables = ["banana,"mazana,"mangostino", "pera"];

--llamar elementos:let var = variable[0]

--arrays asociativos = 
	 es llamar el nombre del array y no por el numero para que sea mas didactico

	 		asociativo
	 let pc = {
	 		nombre:"Diego PC",
	 		procesador:"i5",
	 		ram:"16 GB",
	 		espacio:"1 TB"
	 };
	let nombre = pc ["nombre"] ;
	let procesador = pc ["procesador"] ;
	let ram = pc ["ram"] ;
	let espacio = pc ["espacio"];

	frase = `el nombre de mi PC es: ${nombre} <br>
			 el procesador es :  ${procesador} <br>
			 la memoria ram es : ${ram} <br>
			 el espacio en disco es de : ${espacio} `;

	document.write(frase);

13) bucles e iteracion::

--while
	let numero = 0;

	while (numeroParaSumar < 10){
		numeroParaSumar++;
		document.write(numero)
	}

-do while primero pregunta do y luego pasa por condicionde while
	do{
		document.write(numero + "<br>");
		let numero++; }
		while (numero <=6)

--Break
	termina la sentencia while
	let numero = 0;

	while (numero < 15){
		numero++;
		document.write(numero);
		if(numero == 10) {break;}	}

--for
	declaramos/inicializamos / condicion /iteramos(aumento o decremento)
	let i = 20;
	for (let i = 0; i <6 ; i++){
		document.write(i+ "<br>")
	}
	tambien se puede delarar por fuera
	let i = 6;
	for (i; i >=0 ; i--)

--continue
	for (let i = 0; i<20;i++){
		if (i==12){
		continue;
		} document.write(i+"<br>");
	}

--for in / of (in muestra posicion / losnombre de la libreria)
	let animales = ["gato", "perro","tiranosaurio"];
	for (animal in animales){
		document.write(animal+"<br>");
	}
	document.write("<br>");
	for (animal of animales){
		document.write(animal+"<br>");
		 }

--label es una senticia para asociar a un bucle forRancion:

	array1 = ["maria","josefa","roberta"];
	array2 = ["pedro","josefa",array1 ,"josefina"];
	forRancion:
	for (let array in array2){
		if (array == 2){
			for(let array of array1){
				document.write(array + "<br>");
				break forRancion;
			 }
		} else{
			document.write(array2[array] + "<br>");
		}
	}

14) Funciones
-defincion y usos
	una funcion es unconjunto de isntruciones o operacion que devuelve un valor antes de aber ingresado un dato de entrada primero. 
-formas de crear funciones(y llamarlas)
-ruturn en una funcion debe retornar un valor
-parametros
-scope
-funciones flecha

function saludar(){
	respuesta= prompt("hola diego, como fue tu dia?");
	if(respuesta=="bien") {
	alert("me alegro")
	} else{ 
		alert("Una pena")}}
	llamar la funcion	
	saludar()

--return
	function saludar(){
		alert("hola");
		return "todo ok"}
	let saludo = saludar()
	document.write(saludo)
-- parametros
 	function sumar(num1,num2){
 		let res = num1+num2
 		return res}
 	let resultado = suma(20,25);
 	document.write(resultado)
--funciones flechas ( y si usamos 1 parametro no hace falta poner
						parentesis al parametro y tambien return sin {} si es una sola lineade retorno)
	const saludar = (nombre)=>{
	let frase = `hola ${nombre} ¿como estas?`;
	document.write(frase)
	}
	saludar("pedro")

	------- CAPITULO 3 ---------
	Orientados a obejtos

15)
	POO
	-definicion y usos

	nos sirve para programar ojbetos en la vida real

	-ej
	-instanciacion
16) Conceptos basicos de POO
	-clase es la creacion del objeto
	-objeto son el resultadod de las clases (codigo this.var)
	-atributo son las particularidades,caracteristicas y propiedades
	-metodo son las cosas que puede a hacer nuestro objeto 
	!! el metodo es un funcion pero cuando esta dentro de una clase se llama metedo y fuera de la clase es funcion.
	aparte se usa metedo normal sin flecha y sin this.var !!
	-constructor tiene una funcion obligatoria
	-instanciacion es que la clase este isntanciada
--Codigo
	class animal{
		constructor(especie,edad,color){
		this.especie =especie;
		this.edad = edad;
		this.color = color;		
		this.info = `Soy ${this.especie}, tengo ${this.edad} años 
		y soy de color ${this.color}`;
		}
		verInfo(){
			document.write(this.info + "<br>")
		}

	}
let perro = new animal ("perro",5,"marron");
let	gato = new animal ("gato",6,"naranja");
let pajaro = new animal ("pajaro",7,"verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

https://youtu.be/z95mZVUcJ-E?t=15994

17) Caracteristicas de la POO
	-Absraccion
	-modularidad
	-polimorrfismo
	-Encapsulamiento

18) Otros conceptos de POO
	-Herencia
	-metodos estaticos
	-metodos accesores(getters,setters)
	

19) Otros conceptos de POO
	-Jerarquia