

class animal {
	constructor(especie,edad,color){
		this.especie = especie ; 
		this.edad = edad ; 
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad}
		años y soy de color ${this.color}`;
	}
	verInfo() {
		document.write(this.info + "<br>");
	}
	}
class Perro extends animal {
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;
	}
	ladrar (){
		alert("waaw")
	}
}


const perro = new Perro ("perro", 5 ,"rojo" , "caniche");
const gato = new animal ("gato", 2 , "negro");
const bird = new animal ("bird", 5 , "brown");

perro.ladrar();

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(bird.info + "<br>");
perro.verInfo();
gato.verInfo();
bird.verInfo();