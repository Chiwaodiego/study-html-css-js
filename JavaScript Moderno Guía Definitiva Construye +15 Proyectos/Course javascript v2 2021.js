- estructura de pagina html
<<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
2
--CAP1

- Variable
	- Caracteristicas de una variable.
		- inicializar un variable con un valor;
		- se puede reasignar y inicializar sin valor y asignarlo despues.
		var variable;
		- Tambien se puede usar multiples variables.
			var a = b,
				c = c,;
		- Las var no pueden iniciar con numeros pero si con guin bajo y numero
			_01
		
	- Tipos de datos:
		- String = "cadena de texto"  // Cadena de texto
		- number = "solo numero"
		- boolean = " 0 or 1 / true or false "

			- x es un ejemplo de variable cualquiera.
	-tipos de variables: 

		- Var (nombre de la variable) = x es el valor de la variable.

		- let numero = x
			- Var y let se pueden modificar y declarar por su parte.

		- const variable = x
			Const + variable es una unica y que no se puede cambiar su valor.
	- Scope
		- VAR: Es una variable que SI puede cambiar su valor y su scope es local.

		- LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.
				ejem
				si declaro a fuera de una funcion valor x
				pero a dentrode un funcion va valer otro valor dentro de la funcion.
		- CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro.

	- Casos especiales de datos:

		- undifined : variable indefinida
		- Null : tiene valor pero esta nulo  (vacio intencionalmente)
		- Nan (Not a number) : Error de operacion con numero.

	- Hoisting
		Se trata de la ejecucion y creacion de variables.

	- Crear multiples variables(separando con " , ")
		Se puede crear varias variables una tras de otra.
		 let var1= 2,var2= dias;

	- Pruebas con Prompt:
		Operador que contiene la variable introducida.



- Concatenacion
	- Definicion
			Unir varios string
	- Con el signo +
	- Para numeros forzamos string ( "" + 9 + 4)
	- Con concat
		- Para utilizar concat tiene que haver un string
			n1; "dias3" ; 
			n2 = dias ; 
			frase= n1.concat (n2); 
			document.write (dias3dias)

	- Con backtiks `` y variables entre ${}

		n = "diego";
		f = `soy ${n} y estoy caminando` ; document.write (f) ; resultado  f(n)


	- Batickticks y escape
		- Se usa `` para cierre y al = que comillas dobles, se debe aplicar 1 solo para cada cierre pero sepuede usar dentro de cada uno.


- Camel case
	- Defenicion
			- Cuando una variable contiene varias palabras, se le agrega mayus a todas las palabras que sigan despues de la primera que es "minuscula".
					variableSiguienteDeEsto= x
	- usos
		var1 =  (var1); convierte el texto a entero
	Ej

- Metodos de cadenas
	- concat () -
		- Une 2 o mas arrays y retorna una nueva.

		const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
		const meses2 = ['Julio', 'Agosto', 'Septiembre'];
		const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];
		
		const meses4 = meses.concat(meses2,meses3);
		console.log(meses4);

		// Existe otra forma... que es con rest operator o spread operator..
		

	- Spread operator
		Crea un nuevo array y agrega otros arrays que son copias sin modificar el arrays originales.
			const meses4 = [...meses,...meses2 ]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
			console.log(meses4)
			
	- parseInt()
		- Convierte el string en numero
	- parseFloat()
		- Convierte un string de decimales a una fracciones.
		x = 20.2
		parseFloat(x);  r = 20.2 en fraccion
	- isInteger()
		- Revisa la cadena si hay un numero entero devuelve true sino false.

	- startsWith() 
		- si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
			let cadena = "cadena de ";
			let cadena2 = "cadena "
			resultado = cadena.starWith(cadena2);
			es true
	- endsWith()
		- si una cadena termina con los caracteres de otra cadena, devuelve true, no sino devuelve false.
	- includes() 
		- si una cadena puede encontrase dentro de otra cadena, devuelve true, sino devuelve false.
			let cadena1 = "cadena de ";
			let cadena2 = "prueba"
			resultado = cadena.concat(x); x puede incluir un string o agregar una variable.

	- indexOf() 
		- Devuelve el indice del primer caracter de la cadena de la cadena, si no existe, devuelve -1 .
			let cadena1 = "cadena de ";
			resultado = cadena.indexOf("de") => 7 
	- lastIndexOf()
		- Devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1 .
		Tiene que ser el caracter entero del elemento no palabras.


	- padStar() [prpuesta estandard]
		- rellena la cadena al principio con los caracteres deseados 
			let cadena = "a"
			result = cadena.padStar(a,b)
			a  es el total de cuantos caracteres va tener la cadena.
			b va ser el valor que va llenar es espacio.
	- padEnd() [propuesta ECMA]
		- rellena la cadena al alfinal con los caracteres deseados 
	- repeat()
		- Sirve para repetir la cadena
			let cadena = "123 "
			result = cadena.repeat(2)
			"123 123 "

	- split()
		- modifica la cadena diviendo los string en arrays.
			let cadena1 = "Hola como estas ";
			let resultado = cadena1.split(" ");
			result = "Hola,como,estas,"
			- split("x") el valor x va ser removido de la cadena y para separar a los demas string convirtiendolos en arrays.
			document.write(resultado);
	- substring()
		- indica donde comienza y termina el string cortandolos.
			let cadena1 = "ABCDFG";
			let resultado = cadena1.substring(0,2);
			document.write(resultado); => AB
			- el primer parametro incluye el valor el segundo no.
	- toLowerCase()
		- Convierte la cadena todo en minuscula
			let cadena1 = "ABCDFG";
			let resultado = toLowerCase();
	- upUpperCase()
		- Convierte la cadena todo en mayuscula
	- toString()
	 - convierta la cadena en string, pero no es sencible ejemplo si multiplicas lo toma pero si los sumas lo concatena.
	 sirve tambien para pasar un array a string
	- trim()
		- Quita los espacio de un string
	- trimStart()
		- Quita los espacios del principio
	- trimEnd()
		- quita los espacios del final
	- lenght
		document.write (cadena.length); muestra la cantidad espacio y caracteres del string
	- valueOf() Retorna el mismo string
	
-----------------------------------------

- Objeto literal / Como crear un objeto, modificar, acceder y manipular.
	- Se utliza {} para la syntaxis de un objeto 
	//! objeto es el objeto
	//!  a p s se lo conoce como propiedad del objeto : el valor que contiene esa propiedad , coma como separacion
	const objeto  = {
		//! para declarar una propieda se usa la 
		// * propiedad : valor , propiedad : valor ,
		a: "abc",
		p: 300,
		s: 20,
	}
	//* console.log(propiedad)
	
	- Para acceder a las propiedades de un objeto existen 2 formas.
	//! por punto  objeto.propiedad
		- console.log(objeto.a);
	//! por objeto['propiedad'];
		- console.log(objeto[`a`]);
	- agregar una propiedad o eliminar propiedad dentro de un objeto
		- agregar
			- objeto.propiedad = valor;
		- Eleminar 
			- delete objeto.propiedad;
	- Destructuring de Objetos
		- extraer la propiedad y el valor dentro del Objeto, y  se puede reutilizar para no llamar la funcion larga.
			const producto = {
				nombre = " monitor",
				precio = " 10",
				disponible = true
			}
		- version normal
			const nombre = producto.nombre;
			console.log(nombre)
		- version Destructuring //! se usan const {propieda} = objeto;
			- const { nombre } = producto;
			- const { precio } = producto;
			or
			- const { nombre , precio } = producto;
		- Depues se puede utilizar las propiedades dentro de una funcion acortando su elemento.
	//! crear un objeto vacio y poner propiedades y llamarlo.
			const propieda1 = casa;
			const propieda2= perro;
			//* Para no repetir casa: casa, ... se pone solo la porpieda es una abreviacion de JS
			//* tambien agregar otra propiedad diferente con valor
			const objeto = {casa,perro, Id: Date.now()}
	
	- Crear un objeto dentro de otr objeto
		const objeto1 = {
			nombre: "diego";
			objeto2 : {
				objeto3: {
					apellido: 'chi'}
				objeto4: {
					telefono: 312313212}
			}
		}
	- acceder al objeto y propiedades se usa '.'
		console.log(objeto1.objeto2.propiedad);
	- Para acceder de otra forma 
		const { nombre, objeto2, objeto2{objeto3: {telefono}}}
			//! Para accder a los demas volores se repite Destructuring
			cosole.log(nombre) extrae el valor de nombre
			cosole.log(objeto2) extrae las demas propiedes objeto 3 y 4
			cosole.log(telefeno) extrae el valor de telefono
	- agregar valor a las propiedades o eliminar
			const objeto1 = {
					nombre: "diego";
					disponible: true;					
				}
			// para agregar un valor o Eleminar
			objeto.disponible = false;
			delete objeto.nombre;

	- Problemas con los objetos
		- La funcion "use strict";
			Hace que las variables declaradas sin var let o const no se inicion por malas practicas.
	- Object.freeze(objeto);
		- Congelar un Objeto similar a const para que nose puede modificar el objeto por dentro.
		- Para identificar sin un objeto es ta congelo es con.
			- Objecto,isFronzen(objeto) ;  resultado true o fasle.
	- Object.seal(objeto);
		- Lo que hace es que no se pueden agregar ni eliminar propiedades. Pero si modificar las existentens.
		- Corroborar objeto isSeal(objeto); true or false;
	- const variable1 = Object.assign(objeto1,objeto2);
		- Une 2 objetos
	- const variable1 = { ...objeto, ...objeto2 } 
		- lo que hace ... es copiar un objeto y pasarlo a una variable.
	- this.variable
		- this es una palabra reservada de javascript que permite acceder solo a los datos que estan dentro del objeto
	-Interadores de objetos.
		- Object.keys(objeto);
			- Retorna las llaves de un array
			- Se usa si si la base de datos tiene o no informacion.
		- objectco.values(ojbeto);
			- retorna los valores del array
		- objectco.entries(objeto);
			- retorna la llave y valor

---------------------------------

- Arrays
	- Definicion
		Los arrays son objetos o variables que se usan para almancenar datos y aplicar un metodo de operacion de recorrido y/o mutacion, y modificar sus datos
		si se crean con const.
	- Forma de crear un arrays;
		var = ["pera", "tomate", "etc"];
		- para mostra elemento se seleccciona en la posicion que esta [1]
			- documente.write (var[1])
- Arrays asociativos
	- Definicion
		En ves de usar inde de la posicion para ubicar el objeto se usa el nombre del objeto.

	- array asociativos. Se puede guardar un array dentro de otro array
			let arrays1 = [ "cat", "dog", "bird"];
			let arrays2 = [ "camion", "moto", arrays1 , "trailer"];

	- Sintaxis y usos
			let pc1 = {
				nombre: "DiegoPc",
				procesador: "intel core 9"}
			let nombre = pc1 ["nombre"]
			frase = `nombre de mi pc ${nombre}`

- Formas de declarar los arrays
	- Forma imperativa
		- Se usa los metodos tradicionales.
	- Forma declarativa  no modifica el arrays si que lo copia y lo apila. Pero no estan claro pero se usa.
<!-- 
		const carrito = [];
		const producto = {
			nombre: 'Monitor 20 Pulgadas', 
			precio: 500}
		const producto2 = {
			nombre: 'Celular', 
			precio: 500	}
		const producto3 =  { 
			nombre: 'Teclado', 
			precio: 50}
		let resultado = [...carrito, producto];
		resultado = [...resultado, producto2];
		// Para añadir al inicio...
		resultado = [producto3, ...resultado];
		console.log(resultado); -->
	- Destructuring , extraer elementos de un array
		
		const num =   [10,20,30,40,50];
		// para extraer valores de una posicion de un elemeneto se debe empezar con comas ","
		
		const [ primero ,segundo,tecero] = num ;
		or si aplicaas ...tercero mostrara todo el array empezando por el la posicion dada.
		console.log(tercero);


	- forEach forma de recorrer un arrays comparadon con un for de forma tradicional.
			<!-- const carrito = [
				{ nombre: 'Monitor 20 Pulgadas', precio: 500},
				{ nombre: 'Televisión 50 Pulgadas', precio: 700},] -->
		// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
				<!-- for(let i = 0; i < carrito.length; i++ ){
				console.log( `Articulo: ${ carrito[i].nombre } Precio: $ ${carrito[i].precio} ` )} -->
					
		// ForEach
			<!-- la variable producto puede ser  cualquier nombre
			carrito.forEach( function(producto) {
				console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} ` )
			}) -->
	- Diferencias forEach y map 
		- La diferencia es que map te crea un array nuevo y forEach no. Aparte si retronas el valor con forEach sera indefinido.
			<!-- const nuevoArray = carrito.map( function(producto) {
				return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;})

			const nuevoArray2 = carrito.forEach( function(producto) {
				return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;})
			console.log(nuevoArray);
			console.log(nuevoArray2); -->


- Funciones
	- Definicion y usos
		- Son funciones con paremetros que se puede volver utilizar mientras llamemos la misma funcion agregando los valores que se va usar.
	- Formas de crear funciones y declarar funciones 
		- Existe 2 formas de crear funciones  y otra mas pero es un metodo.
			- Declaraacion de funcion
				- function variable (parametros){ metodo };
			- Expresion de funcion
				- const variable = function(parametos){ metodo};
	
	- Inicializar la funcion seria
				- variable()

	- Funciones nativas de javascript
		- Existen mas de 4000 funciones.
	- Diferencias entre funciones y Metodos
			<!-- 
			const numero1 = 20;
			const numero2 = "20"; -->
		// Aunque en realidad terminan siendo practicamente lo mismo, la forma en que se utilizan tiene que ver más que nada en el contexto que son utilizadas..
			<!-- 
			console.log( parseInt(numero2) ); // Esto es una función
			console.log( numero1.toString()); // Esto es un método -->
		// Puedes ver que mientras la función toma el valor en el parentesis, el método añade un punto seguido del nombre, esa seria la diferencia
		
	- #IMPORTANTE#
		- Errores comunes en llamar una funcion (asnwer work)
			- En las 2 formas de crear funciones. Cuando iteramos una funcion y luego creamos una funcion en funcion declarativa va ejecutarse pero en funcion expresiva va dar error porque por el hosting
			- hosting : hace 2 recorridos en una pagina primero escanea todos los llamados y luegos ejecuta las fuciones y metodos.
	
	
	- Parametros y argumentos de una funcion
		Ej:
<!-- 
			function variable (parametros){ funcion};
			variable(); llamado

			function saludar(nombre, apellido) {funcion }
			console.log( `Hola ${nombre}  ${apellido} ` );
			saludar("juan", "chi") -->
		- Los parametros se pueden poner cualquiera nombre, en funcion al proposito de la funcion.

	- Parametros por default
		- Cuando se llama una funcion y no se pasa los parametros, se le puede agregar valores por default.
		En los parametros agregar otro valor = poner otro valor que quieres que aparesca. 
		<!-- (parametro = "var x default")

		function saludar(nombre = 'Desconocido', apellido = '') {
			console.log( `Hola ${nombre}  ${apellido} ` );
		} -->
	- Como se comunican las funciones entre si...

		Tus funciones se van a comunicar, en lugar de tener una gran función con 800 lineas es recomendable dividirla en pequeñas partes, realizan una operación y se van hacia la otra función...
<!-- 		
		iniciarApp();
		function iniciarApp() {
			console.log('Iniciando App...');
			segundaFuncion();}
		function segundaFuncion() {
			console.log('Desde la segunda función...')
			usuarioAutenticado('Pablo');}
		function usuarioAutenticado(usuario) {
			console.log('Autenticando usuario...');
			console.log(`Usuario autenticado con éxito ${usuario} `) -->
	- Return
		- Es un valor que retorna despues de finalizar la funcion.
			- Ej avanzado
				<!-- let total = 0;
				function agregarCarrito(precio) {return total += precio;}
				function calcularImpuesto(total) {return 1.15 * total;}
				total = agregarCarrito(200);
				total = agregarCarrito(300);
				total = agregarCarrito(400);
				console.log(total);
				const totalPagar = calcularImpuesto(total);
				console.log(`El total a pagar es de ${totalPagar}`); -->
	- métodos de propiedad
		- son funciones con una sintaxis similar a las de un método..
		<!-- const reproductor = {
			reproducir: function(id) {
				console.log(`Reproduciendo canción id ${id}`);},
			pausar: function() {
				console.log('pausando...');},}
			reproductor.reproducir(30);
			reproductor.pausar();

			// Tambien los métodos pueden quedarse por fuera
			reproductor.borrar = function(id) {// }
			reproductor.borrar(20); -->
	- Funciones flechas
				<!-- 
                const aprendiendo = function() {
					console.log('Aprendiendo JavaScript');}
                    //esto es lo mimso que abajo
				const aprendiendo = () =>  {
					console.log('Aprendiendo JavaScript');}

				// una linea no requiere llaves
				const aprendiendo = () => console.log('Aprendiendo JavaScript');	

				// retornar un valor
				const aprendiendo = () => 'Aprendiendo JavaScript';

				// si es solo 1 parametro se puede quitar los parentesis
				const aprendiendo = parametro => 'Aprendiendo JavaScript';

				console.log(aprendiendo()); -->

- Condicionales
	- Definicio y usos 

	- If
		- If se activa si el resultado es verdadero
				if (true){funcion }
		- Detener una funcion if con return, aplicando 2 if en una funcion y poniendo return al final de los if par aque no sigan ejecutando el 2segundo if.
				function var (){ 
					if(condicion1){ resultado; return;}
					if(condicion2){ resultado; return;}}
			
	- Else if
		Es otra condicion si no se cumple con if
				else if (true){funcion }
	- Else
		- Else es el cierre si no se cumplio con las demas condiciones.
				else { function o aviso}
	- Switch 
		- Es una condidcion que sirve para revisar multiples condiciones, pero en diferencias con if no podria comparar si el valor estrictamente exacto.
		Ej.
		<!-- const metodoPago = 'efectivo';

			switch(metodoPago) {
				case 'efectivo':
					console.log(`Pagaste con ${metodoPago}`);
					break;
				case 'cheque':
					console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
					break;
				default:
					console.log('Aún no has pagado');
					break; }  -->
	- Ternario anidado...
		console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'esta autenticado pero no puede pgar' : 'No esta autenticado');

- Operadores en javaScript

	- Operadores de asignacion
		- Un op.asig asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.
		 + - 
		 % modulo o multiplo
		  * /
		  Abreviacion y completo
		  Igual para lo demas operadores
		 x+=y  es igual a  x = x+y

		 And , or , xor

	- Operadores Aritmeticos
		- Los op.a toman  valores numericos (ya sean literales o variables) como sus operandos y retornan un valor numericos "unico".
			Ej: incrementar o decrementar
					n1= 10; or
					n1++ ; 
					r = n1; or r= n1++ ; or r = n1+n2 ;
					alert(r) = 11

	- Operadores de comparacion
		- Los "o.c" comparan dos expresiones y devuelven un valor "boolean" que representa la "relacion" de sus valores
			- ingualdad		a==b
			- ingualdad 	a != b
			- igualdad stricto si los 2 valores son el mismo texto		 a === b ;true / 23 === "23" ; false
			- non-identify si los 2 valores son el mismo pero en dato "no" es true		a !== b; false / b !== "b" ; true
			- mayor o menor o igual 
					Se aplica de esta manera
					mayor o igual >=
					menor o igual <= 

	- Operadores logicos
		- Los op.l nos devuelve un resultado a partir de que se cumpla (o no) una "condicion", su resultado es "booleano", sus opreandos son valores logicos o asimilables a ellos.
				and = &&
				or = ||
				not =  !var
						- Not invierte el resultado true a false o f a v.

- Iteradores
	- Definicion y usos
		- Sentencia while
			- Es parecido  un if pero con bucle
			let i = 100; // inicia el while
			while(i < 10){ //condicion
			console.log (`numero ${i}`)
			i++; // incremento
		}
		- Sentencia do while
				La funcion do while
					let i = 100; // inicio
					do {Ejecuta el codigo
						i++; // incrementa
					}
					while(i < 10){ //condicion
					console.log (`numero ${i}`)
					i++; // incremento
					Primero ejecuta y luego la condicion.
		- Sentencia for
			- For se compone por 3 partes
				- declaramos
				- inicializamos
					-Condicion
					- aumento y decremento
				- iteramos (repetir)+
					for( valorde la variable ; vueltas a recorer; i aumentara+1 )
				for (let i = 0 ; i >= 6 ; i++){ document.write (i + "<br>")}


		- Sentencia break
				- Break sirve para finalizar la funcion

		- Sentencia continue
				- Sirve para conitinuar el bucle de la funcion.
						for (let i = 0 ; i <= 6 ; i++){
							if (i == 3) {
								continue;
							}
								document.write (i + "<br>")
							
						};						
				Para usar este atributo se debe aplicar otra funcion dentro de la misma.
		- forEach
			// Recorrer arreglo de objetos
			const carrito = [
				{id: 1, producto: 'Libro' },
				{id: 2, producto: 'Camisa'},
				{id: 3, producto: 'Disco'}
			];
			
			carrito.forEach( producto =>  {
				console.log(`Agregaste ${producto}`);
			});
			
			// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...

		- Sentencia for in
				Muestra el indice de los elementos en un arrays

		- Sentencia for of
				muestra el valor de los elementos

		- Sentencia label

			-Se usa para saltearse todo la itreacion de un bucle.
				Se usa continue or brak + variable cualquiera y otra misma variable vacia a fuera de la funcion para realizar este procedimento.
				variable:
						funcion
						contiunue or break + variable.
---------------------------------------
	- Scope
		Scope dentro de las funciones siempre poner let con alcance regional a la funcion, si no pase  a ser var global y afecteria las demas funciones.

			
- Metodos de arrays

	-
	--- Transformadores ---
	- pop()
		- Elimina el ultimo elemento de un array y lo devuelve.
		let a =  b.pop() 
	- Shift()
		- Elimina el primer elemento de un array y los devuelve.
	- push() 
		- agrega un elemento al array al final de la lista.
		let a = ["x" , "z"]
		let b = a.push("y")
		si mostras el eresultado de b, devuelve la cantidad de elementos en el arrays.
	- unshift () 
		- agrega uno o mas elementos al inicio del arrays y devuelve la nueva longitud del array.
	- reverse() 
		- invierte  los elementos de un arrays
	- sort() 
		- Ordena los elementos de unarreglo(array) localmente y devuelve el arreglo ordenado.
		ordena numericamente y alfabeticamente.
	- splice(a,b,c)parametros 
		- cambia el contenido de un array eleminando elementos existentes y/o agregando nuevos elementos.
		let x = [["x" , "z"] ,["p" , "d"]]
		x = z.splice(a,b,c,c,c)
		a inicio
		b final
		c elemento a gregar o no
		se puede agregar en cualquier posicion como unshift o push x.splice(-1,0,c,c)

	--- ACCESORES ---

	- join(parametro) 
		- une todos los elementos de una matriz (u objeto similar) en una cadena de texto y la devuelve.
		- El valor de parametro va reemplazar las , del arrays separando los elementos.
		Se puede agregar br pero sigue siendo una cadena de texto.
	- slice()
		- Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin(fin no luido).+
		slice(a,b) parametro
		o agregar del (0,-1) es hasta el final o -2.
	
	- findIndex()
			- Busca la ubicacion del objeto y retorna el indice.
			const indice =  array.findIndex ( ubicacionArray => ubicacionArray === `valor que se encuentre en el array` )
	- find()
		- fiND te creará un arreglo nuevo en base al primer resultado que sea true...
			Busca un elemeneto dentro del arrays y devuelve true si encuentra el elemento.

			const resultado2 = carrito.find( producto => producto.nombre === 'Bocinas');
			console.log(resultado2); true
	- every()
		- 

	- includes() 
		- Sirve para buscar un valor dentro de un array
			const numeros = [10,20,30,40,50];
			numeros.includes(valor a buscar  string o numero);

	- some()
		- En un array de objetos se utiliza .some
			- se utiliza para  comparar si un string esta en otro array y retorna true. Ver ejemplo del proyecto carrito
		Es una funcion OR
			const deTodo = [ 
			{ nombre: 'pedro', trabajo: 'ingeniero'},
			{ nombre: 'Juan', trabajo: 'Programador'}];
			cosnt variable = deTodo.some((array o objeto o cualquier valor)) =>{
				return producto.nombre === `juan`
			} Retorna true

		- En un array tradicional con .some
			const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];
			const existe = deTodo.some( variable cualqueira => deTodo === "Hola");
			return true si lo encuentra.

	- metodos ya vistos en cadenas: toString, indexOf, lastIndexOf, 
	----De REPETICION---
	- Reduce()
		- Suma una cantidad de variables y los unes ,retorna el resultado.
		Ej
		let resultado = carrito.reduce( (total,producto) => total + producto.precio, 0)
		- total es un variable creada con valor 0, producto es otra variable que va tomar los datos de las propiedades . Es parecido un forEach. Y valor 0 es el valor inicial en que numero iniciciar.


	- Filter()
		- Crea un nuevo array basado en el parametro que es evaluado.
		Ej
			const carrito = [
				{ nombre: 'Monitor 20 Pulgadas', precio: 500},
				{ nombre: 'Televisión 50 Pulgadas', precio: 700},
				{ nombre: 'Audifonos', precio: 200},
				{ nombre: 'celular', precio: 50},
				{ nombre: 'Laptop', precio: 800},];
		
			let resultado = carrito.filter( producto => producto.precio > 400 ); // Todos los mayores a 400 - añadir  && producto.precio < 600
			let resultado2 = carrito.filter( producto => producto.nombre === 'Celular'  ); // Traerte el celular
			let resultado3 = carrito.filter(producto => producto.nombre !== 'Laptop'); // Todos menos la laptop, esto sirve para poder traerte todo los demas arrays menos el seleccionado para poder eliminar ese elemento o id
			
			console.log(resultado);
			console.log(resultado2);
			console.log(resultado3);
		let text = ["x" , "z" , "pedro", " jaun"];
		text.filter(numero => document.write(numero + "<br>"))
		- tambien otro uso seria decir que en la cadena del array solo mueste los elemento con mas de 4 letras.
		r = text.filter(numero => numero.length > 4)
		mostrara pedro , juan.

	- filter encadena
			function filtrarAuto(auto) {
				const resultado = autos.filter(filtrarMarca).filter(filtrarYear) ;
			
				console.log(resultado);
				
			}


	- forEach()
			
		array.forEach( (mes))
		- Ejecuta la funcion indicada una ves por cada elemento del array.

		|| isInteger()
		
- Objetos math - basico
	- Se aplica
		var = Math.metodo();
	---METODOS--
	- abs() Devuelve el valor absoluto en positivo.
	- pow() potencia
	- 
	- sqrt() Devuelve la raiz cuadrada positiva de un numero.
	- cbrt() 
		- Devuelve la raiz cubica de un numero.
	- max() 
		- Devuelve el mayor de cero o mas numeros.
		- Solo trabaja con numeros
	- min()
		- Devuelve el mas pequeño de cero o mas  numeros
	- random() 
		- Devuelve un numero pseudo-aleatorio entre 0 y 1
		- Ejemplo
	- ceil()
		- Redondea el valor entero con decimales a hacie arriba. Ej 2.1 = 3
	- round() 
		- Devuelve el valor de un numero dedondeado al numero entero mas cercano
	- fround() 
		- Devuelve la representacion flotante de precision simple mas cercana de un numero.b
	- floor()
		- Devuelve el mayor entero menor que o igual a un numero.
	- trunc() 
		- Devuelve la parte entera del numero x,  la elimaninacion de los digitos fracionarios.

	---PROPIEDADES---

	- Pi 
		- Ratio de la circuferencia de un circulo respecton a su diametro, aproximadamente 3.41159
	- SQRT1_2 
		- raiz cuadrada de 1/2; equivalentemente , 1 sobre la raiz.
		- raiz cuadrada de 2. aprox 0.707
	- SQRT2 
		- Raiz cuadrada de 2, aproximadamente 1.414
	- E 
		- cosntante de Euler, la base de los logaritmos narturales, aproxmadamente.
	- LN2 
		- logaritmo natural de 2 , aproximadamente 0.693 
	- LN10 
		- logaritmo natural de 10, aproximadamente 2.303
	- LOG2E 
		- Logaritmo de E con base 2, aprox 1.443
	- LOG103 
		- Logaritmo de E con base 10, aprox 0.434

---------------------------------------------------

- JavaScript DOM (Document Object Model)
	- Definicion El dom son todos los elementos que componen una pagina web. Y la caracteristicas  especial que tiene el dom es poder acceder a elementos, atributos ,etiquetas ,y poder modificarlos, eliminarlos y agregar.
	- Dom es esta compuesto por un document que es el objeto principal del DOM tambien le sigue lo que es el root(html) de ahi se divide en 2 partes de elementos head y body. 
		- head son los scripts, css, meta. 
			- Se compone por una etiqueta elemento tittle
				- Despues sigue el texto "mi pagina web"
		- body colocamos el codigo html
			- El body puede tener 2 elementos 
				- elemento nav
					- contiene un a enlace
						- un texto
							- y atributos
				- elemento h1
					- texto bienvenido
						- atributo id
							- atributo class
	- Como acceder a los elementos del document html
		- const variable = document; //  seleccina el document
		- const variable = document.all; seleciona todos los elementos elementos.
		- const variable = document.head; seleciona todos los elementos elementos.
		- const variable = document.body; seleciona todos los elementos elementos.
		- const variable = document.forms; seleciona todos los elementos elementos.
		- const variable = document.form[0]; por indice de los objetos.
		- const variable = document.#Id;
		- const variable = document.links;
		- const variable = documentlinks[4]; por indice de los links
		- const variable = document.classList ; retorna los elementos por indice
		- const variable = document.className; retorna string
		- const variable = document.images; cantidad de fotos que hay.

	- acceder  a class
			Accede  a elementos clases y si hay 2 class del mismo nombre lo trae.
			Y si no encuentra el dato te devuelve con un arrray vacio.
		- const header = document.getElementByClassName('header');

	- acceder a ID
		- const formulario = document.getElementById('#formulario');
			Si no encuentra el elemento retorna null.
			Y si tienes 2 id va retornar el primero.

	- querySelector
		- va seleccionar un solo elemento class
			const card = document.querySelector('.card');
		- Puedes tener selectores especificos como en css por class
			const info = document.querySelector('.premiun .info');
			console.log(infos);
		- Tambien por Id
			const info = document.querySelecto('#formulario');
		- Seleccionar elemento HTML
			const nevegacion = document.querySelector('nav');

	- querySelectorAll
		- Retorna todos los elementos indicados por class, no usar id porque es malas
		 practicas.
		 	const card = document.querySelectorAll('.card');
	- modificar elementos
		- formas  de acceder a un texto despues de haber seleccionado elemento h1 
			const encabezado = document.querySelector('.contenido-hero h1');

			console.log(encabezado.innerText); retorna el texto
			console.log(encabezado.textContent); retorna el texto y especios flotantes 
			console.log(encabezado.innerHTML); retorna el text + las etiquetas que contenga el text, por ejemplo etiqueta <span></span>	
			- lo metodos tambien se pueden aplicar en la misma variable.
				const encabezado = document.querySelector('.contenido-hero h1') ;

		- Reemplazar los string por otros o elementos
			let nuevoHeading = 'Nuevo Heading'
			//! .textContent = nuevoHeading
			const encabezado = document.querySelector('.contenido-hero h1').textContent = nuevoHeading ;

		- Vamos a seleccionar el primer card, puedes ver que tiene un parrafo con una categoria llamada concierto, eso le cambia el color: 
			const card = document.querySelector('.card');
			console.log(card);
			console.log(card.classList); // Classlist nos permitirá listar las classes
			card.classList.add('nueva-clase'); // te permitirá añadir una clase.. // si deseas añadir múltiples classes debes agregar una coma en cada una

		- ahora si deseas eliminar una clase utilizas.remove
			card.classList.remove('card'); // de la misma forma si deseas remover múltiples classes tendrías que hacerlo agregando una coma

	- Traversing
		- En js los enlaces se los indentifica como nodos
			const navegacion =document.querySelector('.navegacion');

			console.log(navegacion);
			console.log(navegacion.childNodes); // retorna los elementos y saltos de lineas de espacio. Los espacios en blanco son cosiderados elementos.
			console.log(navegacion.children); // Te enlista los elementos sin los saltos de linea

			- tambien se puede acceder a los nodos como un arrray
				console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un eleemnto
				console.log(navegacion.children[0].nodeName) // Que etiqueta es...

		- Esto seria traversing de DOM
			// en javascript puedes seleccionar un elemento y navegar en sus diferentes elementos... por ejemplo el card...
			console.log(card.children);
			// Si quieres acceder a ese div con la clase de info puedes colocar...
			console.log(card.children[1]);
			// Si quieres accedera  los elementos hijos de ese info... recuerda puedes anidar las propiedades.
			console.log(card.children[1].children[1]);
			// Acceder al titulo
			console.log(card.children[1].children[1].textContent);
			// Modificar ese titulo con un traversing
			card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...'
			// Intenta cambiar el texto que dice concierto por algo más siguiendo esta sintaxis de ir navegando por el DOM...
			
			- retornar una img
				const card = document.querySelector('.card');
				card.children[1].children[1].textContent = 'nuevo heading desde traversing the doom';

				card.children[0].src =  '/img/imagen.jpg'
				console.log(card.children[0]);
			
		- traversing the hijo al padre
			- se usa parentElement
				const card = document.querySelector('.card').parentElement.parentElement;
		- tambien poder ir al siguiente elemento mismo si tengo varias class card, como ir desde el primer elemento al segundo.
			const card = document.querySelector('.card').nextElementSibling;
		- Retrocedor el elemento
		const card = document.querySelector('.card').previousElementSibling;

	- remove Eliminar elementos del dom
		- Eleminar a elemento hijos
			const primerEnlace = document.querySelecto('a');
			primerEnlace.remove();
		- Elminar elementos desde el padre
			const navagecion = document.querySelecto('.navegacion');
			navegacion.removeChild(navegacion.children[2]);

		// Como resumen, uno es por el elemento por si mismo y el otro requiere el padre y la referencia del hijo..
	
	- Generar html con javascript y insetar nuevo codigo en un nodo.
		- Para generar un codigo con js
				cosnt enlace = document.createElement('a');
			// agregando atributos al enlace
				enlace.textContent = 'Nuevo enlace Texto'
				enlace.href = 'link de href';
				enlace.target = "_blank";
				enlace.onclick = agregas un fucnion que diga alert;
			//! agregar nuevos atributpos, 2 formas exitsten.
				// agregar multiples atributos o uno solo
					enlace.setAttribute('data-propiedad o id','valor')
				// agregar atributos personalizados, version nueva Js
					enlace/objeto.dataset.Id/ otro dato perosnalizado
					
			// agregar una class
				enlace.classList.add('otra clase')
			

		- Insertar  el codigo js en html
			// seleccionar un elemento, siempre poner 2 rutas safe para no mesclar elementos con la misma clase elegida
				const navegacion = document.querySelector('.navegacion');
			// para insertar al ultimo se usa
				navegacion.appendChild(enlace);
			// insertar antes de un elemento hijo, se usa 2 paremetros, enlace. y los hijos.
				navegacion.insertBefore(enlace. navegacion.children[1]);

		- Ver ejemplo avanzado 13 dom - cap10
			// En una funcion tambien se puede acortar la indicacion del de const dirigido por this.
			const btnFlotante = document.querySelector('.btn-flotante');

				const footer = document.querySelector('.footer');
				btnFlotante.addEventListener('click', mostrarOcultarFooter);
				function mostrarOcultarFooter() {
					if( footer.classList.contains('activo') ) {
						footer.classList.remove('activo');
						// en  esta parte en ves de poner btnFlotante.classList.revomve se puede abreviar por this. que es exactamente lo mismo //

						this.classList.remove('activo');
						this.textContent = 'Idioma y Moneda';
					} else {
						footer.classList.add('activo');
						this.classList.add('activo');
						this.textContent = 'X Cerrar';
					}
				}
- Eventos en js
	- Hay una funcion que hace esperar las funciones antes que se cargue los datos de la pagina html y css2
		console.log(1)
		document.addEventListener('DOMContentLoaded', () => {
			console.log(2);
		}) // Nota todos los eventos que hay disponibles
		console.log(3);
	// Haca vemos que primero la pagina carga el 1,3 y despues la funcion 2
			
	- Eventos con mouse como un hover
		nav.addEventListener('mouseenter', () => {
			console.log('entrando a navegacion')
			nav.style.backgroundColor = 'white';
		});
		nav.addEventListener('mouseout', () => {
			console.log('saliendo de la navegacion');
			nav.style.backgroundColor = 'transparent';
		})
		- Otros eventos
			// mousedown - // cuando presionamos
			// click - similar, de hecho es probablemente el más utilizado..
			// dbclick - doble click como cuando quieres abrir un archivo
			// mouseup - al soltar
	
	- Eventos sobre los inputs
		- Ejemplos comunes con imputs validar texto, contador de letras.

			const busqueda = document.querySelector('.busqueda');
			
			 busqueda.addEventListener('input', () => {
			     console.log('escribiendo...');})

			// keydown  - cuando presionas una tecla 
			// keyup - Cuando sueltas la tecla...
			// blur - cuando sales del input - ideal para validación...
			// También hay eventos para cortar copiar y pegar
			// cut
			// copy
			// paste
			// input - cuando se ejecutan todas las que aquí se muestran... incluyendo cortar, pegar y copiar
			
			
			// Ahora, no tiene mucha utilidad enviar a la consola un mensaje no? lo ideal seria saber el texto que se escribe o poderlo leer...
			
			 busqueda.addEventListener('input', e => {
			     console.log(e); // Mucha información...
			     console.log( e.type ); // Te dira sobre que elemento estamos trabajando...
			     console.log(e.target); // el input completo...
			console.log(e.target.value) // lo que el usuario escribe...})
			
			// También puede ser como función...
			busqueda.addEventListener('input',  leerInput);
			
			function leerInput(e) {
				console.log(e); // Mucha información...
				console.log( e.type ); // Te dira sobre que elemento estamos trabajando...
				console.log(e.target); // el input completo...
				console.log(e.target.value) // lo que el usuario escribe...}
	- Eventos submit a un formulario
		// Cuando enviamos  un formulario usualmente loq ue este en ele action, abre una pagina nueva.
			const formulario = document.querySelector('.formulario');

			formulario.addEventListener('submit', e =>{
				e.preventDefault(); // preventDefault es evitar que realice un accion por default. Usualmente se utiliza para validar el formulario antes de enviar al servidor.

				console.log('enviando...');
				cosole.log(e.target.method); // muestra el metodo que utiliza si es POST o gets a una api
				cosole.log(e.target.action); // action muestra la dirrecion donde va dirigido 

			})
		// otra forma pasar la fucntion aparte en ves de una funcion anonima
			formulario.addEventListener('submit',validarFormulario);
			function validarFormulario(e) {
				e.preventDefault();
				console.log('Buscando...');
				cosole.log(e.target.action); }

	- 	Eventos con scroll con el mouse
		
			// En este video estaremos viendo eventos que suceden con el scroll del sitio web...
			// Es muy común que muchos sitios agreguen funcionalidad de que al dar scroll y llegar a ver un elemento este tenga alguna animación, eso se hace con eventos en el mouse..
				window.addEventListener('scroll', () => {
				 console.log('scrolling...');
			
				 Detectar el Scrolling vertical...
			
				 const pxScroll = window.scrollY;
				 console.log(pxScroll);

			// Detectar un elemento al dar scroll...
			
				const premium = document.querySelector('.premium');
				const ubicacion = premium.getBoundingClientRect(); // Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual..
					// console.log(ubicacion);
				if(ubicacion.top < 100) {
					console.log('Ya esta visible');
				} else {
					console.log('Aún no esta visible..')
				}})	
	- Event bubbling
		- Es una funcion que programa a los de mas eventos cuando damos click a una img pero esa imagen esta dentro de un div que contiene la img, titulo y texto.
	
			const cardDiv = document.querySelector('.card');
			const infoDiv = document.querySelector('.info');
			const titulo = document.querySelector('.titulo');
		// al seleccionar un elemeento con e.stopPropagation evita que se disparen los de eventos.
			cardDiv.addEventListener('click', e => {
				e.stopPropagation();
				console.log('click card');})
			infoDiv.addEventListener('click', e => {
				e.stopPropagation();
				console.log('click info');})
			titulo.addEventListener('click', e => {
				e.stopPropagation();
				console.log('click titulo');})
	- Prevenir event bubbling  con delegation
		- formas de indenticar los elementos
			const cardDiv = document.querySelector('.card');
			cardDidv.addEventListener('click', e =>{ console.log(e.target)});
		- Hay otro metodo para prevenir el event bubbling, seleccionando un elemento.
			const cardDiv = document.querySelector('.card');
			cardDidv.addEventListener('click', e =>{
			if (e.target.classList.contains('titulo'))
				console.log('le diste click en titulo')
				});
			if (e.target.classList.contains('precio'))
				console.log('le diste click en precio')
				});

	- Prevenir event bubbling con un metodo 
			const parrafo3 = document.createElement('p');
			parrafo3.textContent = '$800 por persona';
			parrafo3.classList.add('precio');

			// de estan forma seria con un metedo.
			parrafo3.onclick = nuevaFuncion(1);

			function nuevaFuncion(id) {
				console.log('click..', id)}

			
	
	- function TIMER
			Cada sierto tiempo va repitiendo.
		- setInterval(function, milliseconds, param1, param2, ...)

		-setTimeout termina la funcion , dependiendo el tiempo asignado
				
				
- LocalStorage 
	- Es un espacio revesado para guardar informacion, exitos otro tipos de storage.
		- Solo se puede guardar numero y string solamente. Pero se puede guardar objetos y arrays  tranformandolos en string.

		- Tipos de localStorage
			- Session storage solo persiste la informacion hasta que se cierre el navegador.
			- Despues esta  otros mas complejos indexedDB, web sql, cookies.

	- LocalStorage  parametros 
		-	agregar informacion se usa setItem + el valor del parametro
			localStorage.setItem('diego','chi');
		// tranformar objetos y arrays en string
			// json apartir de una var
			const producto = {
				nombre : 'monitor 24 pulgadas'
				precio: 300
			}
		// agregar elementos a localStorage setItem	
			const productoString = JSON.stringify( producto);
			localStorage.setItem('producto', productoString)

			// se puede agregar Json.stringify sin crear una var aplicando de esta forma
			const meses = ['enero', 'febrero', 'marzo'];
			localStorage.setItem('meses', JSON.stringify(meses));

		// obtener elementos y tranformalos a objeto y arrays
			const diego = localStorage.getItem('diego');
			console.log(diego);
			
			const productoJSON = localStorage.getItem('producto');
			console.log(JSON.parse(productoJSON));

			//forma simplificada parse + get item
			const meses1 = JSON.parse(localStorage.getItem('meses'));
			console.log(meses1);

		// eliminar elementos de localStorage
			localStorage.removeItem('diego');

		// actualizar un registro, se podria hacer de forma automatica con funciones y metodos.
			const mesesArray2 = JSON.parse(localStorage.getItem('meses'));
			console.log(mesesArray2);
			mesesArray2.push('nuevo mes');
			console.log(mesesArray2);
			localStorage.setItem('meses', JSON.stringify(mesesArray2));
		// limpiar el resgistro
			localStorage.clear();
				
		
- Fechas 
	- Date(parametro)
			- las fechas residen en un 'objeto' llamado DOIT
		- parametro se puede agegrar una fecha (dia-mes-año)
		- errores comunes de instanciada
			Date.now(); no requiere que se isntancie, tampoco new date();
			Date().getFullYear(); pero con date mas la funcion si necesita instaciarse.
	- Metodos de fechas
		- A tener en cuenta existe variedades de metodos de fechas.
			const diaHoy = new Date(); // marca la fecha actual
			const diaHoy = new Date(); // retorna los segundos desde el primero de enero hasta la fecha actual.
			let valor;

			valor = diaHoy;
			valor = diaHoy.getFullYear();
			valor = diaHoy.getMonth(); // retorna el valor del mes actual, pero el valor incial es  0 enero(dato importante).
			valor = diaHoy.getHours();
			valor = diaHoy.getMinutes();
			valor = diaHoy.getSeconds();
			valor = diaHoy.setFullYear(2010);
		
	-  Formatos de fechas
		https://momentjs.com/
		- Fecha de regiones
			const EEUU = new Date(); 
			const Latam = new Date().toLocaleString(); //fecha + hora 
			const Latam2 = new Date().toLocaleTimeString(); //horario
			const Latam3 = new Date().toLocaleDateString(); // solo fecha
		- Formatos con moment (Es una Libreria) (se debe enlasar link de pagina) Existe muchos tipos de formatos
			const diaHoy = new Date();
			moment.locale('es');
			console.log(moment().format('MMMM Do YYYY h:mm:ss a'));
				// tambien se puede cambiar de lugar datos // a indica pm o am				
			console.log(moment().format('LLLL', diaHoy)); //domingo, 5 de diciembre de 2021 10:10\	
			console.log(moment().add(3,'day').calendar());
			//este formato es muy usado para fecha limite o para cupones o examnes. Se implement como condicion.

- Prototypes 
	- Que es el proto y crear un tipo de objeto nuevo
		//objet litereal no te deja crear objetos dinamicos ni tampoco objetos reutilizables
			const cliente = {
				nombre: 'juan',
				saldo: 500	}	
			console.log(cliente);

		//objet construct si se puede reutilizar y es un objeto dinamico.
			function Cliente(nombre, saldo) {
				this.nombre = nombre;
				this.saldo = saldo;	}	
			const juan = Cliente('juan', 500);
			console.log(juan);		
	
	- Creacion y solucion de problemas
		- Prototype solucionan el problema de poder reutilziar funciones anteriores y expandirlas para no estar creando funciones objetliretals

            function Cliente(nombre, saldo) {
                this.nombre = nombre;
                this.saldo = saldo;   
            }             
            const juan = new Cliente('juan', 500);
            console.log(juan)
            
            function formatearCliente(Cliente) {
                const {nombre, saldo} = Cliente;
                return 'El Cliente ${nombre} tiene un saldo de ${saldo}';
            }            
            function formatearEmpresa(Empresa) {
                const {nombre, saldo,categoria} = Empresa;
                return 'El Cliente ${nombre} tiene un saldo de ${saldo} y pernetece a la categoria ${categoria}';
            }            
            console.log(formatearCliente(juan));
            
            function Empresa(nombre, saldo,categoria) {
                this.nombre = nombre;
                this.saldo = saldo;   
                this.categoria = categoria;
            }             
            const CCJ = new Empresa ( 'Codigo con juan', 4000, 'Cursos en Linea');
            console.log(formatearEmpresa(CCJ));   

    - Creando Prototype
                - Desde la function creada con cosntruccion se puede modificar y agregar funciones dentro del prototype, los prototype estan ligado a los objetos eso hace que se pueda instanciarlos como metodos();

                function Cliente(nombre, saldo) {
                    this.nombre = nombre;
                    this.saldo = saldo;}                  
                //crear funciones Exclusivas dentro del prototype
                // Diferencias entre arrow y funcionst
                // functions busca en el objeto actual
                // arrow busca en la ventana global
                Cliente.prototype.tipoCliente =  function () {
                    let tipo;
                    if (this.saldo > 10000) {
                        tipo = 'Gold';        
                    } else if  (this.saldo > 5000) {
                        tipo = 'Platium';        
                    }  else{ tipo = 'Normal';}
                        return tipo;                    
                }                
                Cliente.prototype.nombreClienteSaldo = function () {
                    return `Nombre: ${this.nombre} , Saldo: ${this.saldo} , Tipo de Cliente: ${this.tipoCliente()}`
                }                
                Cliente.prototype.retiraSaldo = function (retira) {
                    this.saldo -= retira
                }                
                // instaciarlo                
                const pedro = new Cliente('Pedro',6000);
                console.log(pedro.tipoCliente());
                console.log(pedro.nombreClienteSaldo());
                pedro.retiraSaldo(1000);
                pedro.retiraSaldo(1000);
                console.log(pedro.nombreClienteSaldo());
                console.log(pedro);
    
    - heradar prototype
                function Cliente(nombre, saldo) {
                    this.nombre = nombre;
                    this.saldo = saldo;}   

                Cliente.prototype.tipoCliente =  function () {
                    let tipo;
                    if (this.saldo > 10000) {
                        tipo = 'Gold';        
                    } else if  (this.saldo > 5000) {
                        tipo = 'Platium';        
                    }  else{ tipo = 'Normal';}
                        return tipo;                    
                }                
                Cliente.prototype.nombreClienteSaldo = function () {
                    return `Nombre: ${this.nombre} , Saldo: ${this.saldo} , Tipo de Cliente: ${this.tipoCliente()}`
                }                
                Cliente.prototype.retiraSaldo = function (retira) {
                    this.saldo -= retira
                }                
                
                
                function Persona(nombre, saldo, telefono) {
                    //formas de heredar
                    Cliente.call(this, nombre,saldo);
                    this.telefono = telefono;
                }
                
                //Para heradar las funciones de Cliente, object.create va copiar las fucniones y pasar a Persona. Pero se pierde el cosntructor, en la siguiente fucnion se arregla
                // primero pasar las herancias antes de instanciarlo.
                Persona.prototype = Object.create(Cliente.prototype);
                //con esto pasa el cosntructor del cliente a Persona
                Persona.prototype.constructor = Cliente;
                
                //instanciarlo
                const Juan = new Persona('Juan',5000, 3255412412);
                console.log(Juan);
                
                // como Persona ya heredo las funciones de cliente se isntancia 
                
                console.log(Juan.nombreClienteSaldo());
                
                //  Tambien debe saber que cliente no toma ningun funcion de persona
                
                Persona.prototype.mostrarTelefeno = function () {
                    return `El telefeno de esta persona es ${this.telefono}`;
                }
                
                console.log(Juan.mostrarTelefeno());      
- 



- POO Programcion orientado a objetos var2
	- Existe 2 formas de crear un POO
	//  esta forma se le llama  // ! class declaration
	class Cliente {
		// * contiene un cosntructor
			constructor(nombre,saldo)
				this.nombre = nombre;
				this.saldo = saldo;
		}
		
		//instaciar class
		const juan = new Cliente('juan',400);
		console.log(juan);
		
		//  esta forma es //!class expresion
		const Cliente2 = class{
			constructor(nombre,saldo ) {
				this.nombre = nombre;
				this.saldo = saldo;
			}
		}
		//instaciar lo mismoq que objet constructor
		//instaciar class
		const juan2 = new Cliente2();
		console.log(juan2);
	- Metodos y metodos estaticos
		- Las funciones dentro de las clases se lo conoce como metedos, pero es lo mismo que una funcion.
		- La cualidades de un metodo puede obtener los datos del cosntructor
		class Cliente {
			// * contiene un cosntructor
				constructor(nombre,saldo){

				//* atributos
					this.nombre = nombre;
					this.saldo = saldo;
				}	
			//* propiedades

				//! metodos
				mostrarInformacion(){
					return`Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
				}
				//!metodo static
				static bienvenido( ){
					return(`Bienvenido al cajero`)
				}]

		}
		//isntaciar
		const juan = new Cliente('juan',400);
		console.log(juan.mostrarInformacion()); //! metodo
		// !metodo static no requiere que sea instancia por una var
		console.log(Cliente.bienvenido());
	- Herencia
		- Para heradar una clase se crea una clase donde se le pasa extends + clase principal
		- dentro del cosntructor se usa super para obtener los atributos de la anterior clase y no poner this porque ya lo hereda.
		- para instanciar una clase heredadas se pasan los parametros normales y para isntanciar un metodo estatico se usa de esta manera
			var = new claseheredadnueva(parametros);
			var.claseEstatica();
		- En claseHeredada crear un metodo igual que en la clasePadre hace que se reescriba los datos tomando la claseHererada

		class Empresa extends Cliente{
			
			constructor (nombre,saldo,telefono,categoria){
				super( nombre,saldo,telefono,categoria);
				this.telefono = telefono ;
				this.categoria = categoria;

			}
			//! reescribe el metodo padre tomande este como actual.
			static bienvenido( ){
				return(`Bienvenido al cajero`)
			}]

		}
	- Propiedades Privadas
		Es un variable  dentro de un clase donde se puede acceder y modificar por medio de una clase y no llamando el nombre de la variable para acceder el valor.
		- ver ejemplo POO 8
		class Cliente {
			//! clase privada, solo se puede accer atraves de una clase
				#nombre;		
			setNombre(nombre){
				this.#nombre = nombre;
			}
			getNombre(nombre){
				return this.#nombre;
			}		
		const juan = new Cliente();
		juan.setNombre('juan');
		console.log(juan.getNombre());
	- metodos accesores (getters , setters )
		- Get
			Se utilizan para obtener un dato
		- Setters
			Se utilizan para modificar el dato
		- Uso: En la moyoria de los lenguajes, los getters y setters se utilizan para acceder a propiedades privadas o en caso de javascript a datos encaosulados.
		- Ej 	<!-- class Perro extends animal {
				constructor(especie,edad,color,raza){
					super(especie,edad,color); 
					this.raza = null;
				}
				set setRaza(newName){
					this.raza =  newName;
				}
				get getRaza(){
					return this.raza;
				}
			}
			const perro = new Perro ("perro", 5 ,"rojo" , "caniche");
			perro.setRaza = "carlo" ;
			document.write(perro.getRaza) --></br>
