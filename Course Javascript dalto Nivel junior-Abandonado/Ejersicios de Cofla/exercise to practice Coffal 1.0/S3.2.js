class App {
	constructor(descargar,puntuacion,peso){ 
	this.descargar = descargar;
	this.puntuacion = puntuacion;
	this.peso = peso;
	this.iniciada = false;
	this.instalada = false;

	}
	abrir(){
		if (this.iniciada == false && this.instalada == true){
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true){
			this.iniciada = false;
			alert("app cerrada");
		}
	}
	instalar(){
		if(this.instalada == false){
			this.instalada = true;
			alert("app instalada correctamente");
		}
	}
	desinstalar(){
		if (this.instalada == true){
			this.instalada = false;
			alert("app desisntalada correctamente.")
		}
	}
	appInfo(){
		return `
		Descargas: <b>${this.descargar}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`
	}
}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("10.000","2 estrellas","300mb");
document.write(`
	${app.appInfo()} <br>
	${app2.appInfo() }<br>
	`)



//app.instalar();
//app.abrir();
//app.cerrar();
//app.desinstalar();
