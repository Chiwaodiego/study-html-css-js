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