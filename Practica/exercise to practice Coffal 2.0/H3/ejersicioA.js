



class phone {
	constructor(marca,modelo,color,peso,rPantalla,rCamara,ram){
			this.marca = marca;
			this.modelo = modelo;
			this.color = color;
			this.peso = peso;
			this.rPantalla = rPantalla;
			this.rCamara = rCamara;
			this.ram = ram;
			this.estado = true ;
	
	}

	botonOnOff(){
		if (this.estado == false) {
			alert(`Celular enecendido`);
			this.estado = true;		
		}
		else {
			alert(`Celular apagado`);
			this.estado = false
		}
	}
	tomarFoto() {
		if (this.estado == true) {
			alert(`Foto tomada`)
		}
		else {alert `El celular se encuentra apagado`}
	}
	grabarVideo(){
		if (this.estado == true) {
			alert(`Grabando`)
		}
		else{ alert(`El celular se encuentra apagado`)}
	}
	mobileinfo(){ 
			return `
			Marca: ${this.marca} <br>
			Modelo: ${this.modelo} <br>
			Color: ${this.color} <br>
			Peso: ${this.peso} gramos <br>
			Resolucion de Pantalla: ${this.rPantalla} pixels <br>
			Resolucion de Camara: ${this.rCamara} pixels <br>
			Memoria ram: ${this.ram} Gb <br>
			`;
	}

}

class phoneHighEnd extends phone {
	constructor(marca,modelo,color,peso,rPantalla,rCamara,ram,rCamaraExtra){
		super(marca,modelo,color,peso,rPantalla,rCamara,ram);
		this.rCamaraExtra = rCamaraExtra;
	}
	grabarSuperLento(){
		if (this.estado == true) {
			alert(`Grabando en super camara lenta`);
		}
		else{ alert(`El celular se encuentra apagado`)};
	}
	reconocimientoFacial(){
		if (this.estado == true) {
			alert(`Reconocimiento facial`);
		}
		else{ alert(`El celular se encuentra apagado`);}
	}
	infoAltaGama(){
		return this.mobileinfo() + `
		Resolucion de  camara extra: ${this.rCamaraExtra} <br>` 

	}
	
}

//celulares de alta gama

const celularAltaGama1 = new phoneHighEnd("CatPiler", "Super" ,"grey", 200 , 15, 13 , 5, "Full HD HIGH" )
const celularAltaGama2 = new phoneHighEnd("Steam", "Deck" ,"grey", 500 , 20, 20 , 16 , "Full HD Definition" )

document.write(`
	${celularAltaGama1.infoAltaGama()} <br>
	${celularAltaGama2.infoAltaGama()} <br>

	`);

celularAltaGama1.grabarSuperLento();

// celulares normales
// const  celular1 = new phone("Nokia", "N4.2" ,"grey", 120 , 12, 13 , 2 );
// const  celular2 = new phone("Samsung", "A5" ,"red", 110 , 15, 13 , 5 );
// const  celular3 = new phone("Motorola", "G5" ,"blue", 130 , 16, 10 , 4 );


// document.write(`
// 	${celular1.mobileinfo()} <br>
// 	${celular2.mobileinfo()} <br>
// 	${celular3.mobileinfo()} <br>
// 	`);



// 

// celular1.botonOnOff();


// estado del celular
// const encender = ()=>{
// 	while { 
// 		estado == false
// 	 let opcion = prompt(`
// 	 	Elija la opcion: <br>
// 	 	1. Encender el celular <br>
// 	 	2. Reiniciar el celular <br>
// 	 	3. Apagar el celular <br>
// 	 	4. Tomar foto <br>
// 	 	5. Funcion grabar <br>
// 	 	`)

// }
// }


	 // if (opcion == "1") {
	 // 	if (estado == false) {
	 // 		celular
	 // 	}
	 // }