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
	verInfo(){document.write(this.info + "<br>")}

	Encendido(){
		if(this.encendido == false){
			alert("celular prendido");
			this.encedido = true;
		}else {
			alert("celular apagdo");
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
	tomarFotos(){alert(`foto tomada en una resolucion de ${resP}`);	}
	grabarVideo(){alert(`grabando video en ${resC}`);}

}




const nokia = new Cel("nokia","rojo",300, 5.4,"Full HD",4);
const samsung = new Cel("samsung","azul",250,6,"Full HD",16)
const motorola = new Cel("motorola","verde",230,6,"Full HD",16)


nokia.verInfo();
samsung.verInfo();
motorola.verInfo();