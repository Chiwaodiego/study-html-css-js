


class app {
	constructor(cantidadDescarga,puntuacion,peso){
		this.cantidadDescarga = cantidadDescarga;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.estado = false;
		this.estadoApp = false;
	}
	appInfo(){
		return`
		Cantidad de descargas: ${this.cantidadDescarga} <br>
		Puntaje de valoracion: ${this.puntuacion} <br>
		Peso de la Aplcacion: ${this.peso} mb <br>
		`;
	}
	instalar(){
		if (this.estado == false ) {
			this.estado = true;
			alert(`App a sido instalada correctamente`);
		}
		else { alert(` la app ya esta instala`);}
	}
	desinstalar(){
		if (this.estado == true ) {
			this.estado = false;
			alert(`App a sido desinstalada correctamente`);
		}
		else { alert(` la app ya a asido desinstalada`);}		
	}
	abrir(){
		if (this.estado == true && this.estadoApp == false) {
			this.estadoApp = true;
			alert(`La App abrio correctamente`)
		}
	}
	cerrar(){
		if (this.estado == true && this.estadoApp == true){
			this.estadoApp = false;
			alert(`La App se cerro correctamente`)
		}

	}


}

const app1 = new app(1200, 6.6 , 56);




document.write(`
	${app1.appInfo()} <br>

	`);

app1.abrir();
app1.cerrar();
app1.desinstalar();
app1.instalar();

