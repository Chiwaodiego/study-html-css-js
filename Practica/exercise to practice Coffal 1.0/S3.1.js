class Cel{
	constructor(modelo,color,peso,resP,resC,ram){
		this.modelo = modelo;
		this.color = color;
		this.peso = peso;
		this.resP = resP;
		this.resC = resC;
		this.ram = ram;
		this.encendido = false;
		this.info =  `Este celular marca ${modelo} ${color} tiene una resolucion de pantalla ${resP}" 
						una camara de ${resC} , memoria ram de ${ram}Gb y pesa ${peso} gramos.`;
	}	
	verInfo(){document.write(this.info + "<br>");}

	Encendido(){
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert("celular apagado");
			this.encendido = false;
		}
	}

	reiniciar(){
		if (this.encendido == true){
			alert("Reinciando Celular");
		} else{
			alert("El celular es apagado");
			this.encendido = false;
		}
	}

	TomarFotos(){alert(`foto tomada en una resolucion de ${this.resP}`);	}
	GrabarVideo(){alert(`grabando video en ${this.resC}`);}

}


class CelularAltaGama extends Cel {
	constructor(modelo,color,peso,resP,resC,ram,rdce){
		super(modelo,color,peso,resP,resC,ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("estas grabando en camara lenta");
	}
	reconocmientoFacial(){
		alert("vamos a iniciar un reconocimiento facial")
	}
	infoAltaGama(){
		return this.verInfo() + `Resolución de Camara Extra: ${this.resolucionDeCamaraExtra}`;
	}
}


//const nokia = new Cel("nokia","rojo",300, 5.4,"Full HD",4);
//const samsung = new Cel("samsung","azul",250,6,"Full HD",16)
//const motorola = new Cel("motorola","verde",230,6,"Full HD",16)
const samsungA20 = new CelularAltaGama ("samsungA20","verde",230,6,"Full HD",16,"HD");
const samsungA21 = new CelularAltaGama ("samsungA21","verde",230,6,"Full HD",16,"HD");


document.write(`
	${samsungA21.infoAltaGama()}<br>
	${samsungA20.infoAltaGama()}<br>
	`);


//nokia.verInfo()
//samsung.verInfo();
//motorola.verInfo();

//nokia.Encendido();
//nokia.TomarFotos();
//nokia.GrabarVideo();
//nokia.reiniciar();