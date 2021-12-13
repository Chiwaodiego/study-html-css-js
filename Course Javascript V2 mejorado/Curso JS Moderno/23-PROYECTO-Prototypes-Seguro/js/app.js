
// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// realizar la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
    /*
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

   //leer el año
    const diferencia = new Date().getFullYear() - this.year ;

   // cada año que la difrencia es mayor, el costo va a reducirse un 3%
   cantidad -= ((diferencia * 3) * cantidad) / 100;
    /*
    si el seguro es basico se * 30% mas
    si el seguro es completo se * 50% mas
    */
    if (this.tipo === 'basico') {
        cantidad += 1.30;
    } else{
        cantidad += 1.50;
    }
    return cantidad;
    
}

function UI() {}

// Llena las opciones de los años

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
    min = max - 20;

    const selectYear = document.querySelector('#year')

    for (let i = max; i > min; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) =>{
    
    const div = document.createElement('div');

    if (tipo === "error") {
        div.classList.add("error");
    } else {
        div.classList.add("correcto");
    }
    div.classList.add("mensaje", "mt-10");
    div.textContent = mensaje;

    //insertar en el HTML, la var formulario esta creado en otra funcion por temas de scoope, la unica solucion es ponerlo como var global o crear otra haca pero no afecta.
    const formulario = document.querySelector('#cotizar-seguro');
    //insertbefore usar el segundo parametro para indicar donde insertar
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
      div.remove();
    }, 1000);
}

UI.prototype.mostrarResultado = (total,seguro) =>{
    
    const {marca, year, tipo} = seguro;
    let textoMarca;
    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    //crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = 
    `
    <p class="header">Tu Resumen</p>
    <p class="font-bold"> Marca: <span class="font-normal"> ${textoMarca}</span>  </p>
    <p class="font-bold"> Año: <span class="font-normal"> ${year}</span>  </p>
    <p class="font-bold"> Tipo de seguro: <span class="font-normal capitalize"> ${tipo}</span>  </p>
    <p class="font-bold"> Total: <span class="font-normal"> $ ${total}</span>  </p>
    `
    ;

    const resultadoDiv = document.querySelector('#resultado');
    

    //mostrar el spinner
    const spinner = document.querySelector(('#cargando'));
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; // se borra el spinner y se muestra el resultado
        resultadoDiv.appendChild(div);
      }, 1000);
}


// instanciar UI global
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años...
})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {

    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value; //.value se extrae el valor de la variable

    // Leer la year seleccionada
    const year = document.querySelector('#year').value;
    // Leer la tipo seleccionada| seleccionar el input por atributo [name="tipo"]:checked  se agrega el checkeds par no confundir con el otro input
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipo);
    //validacion
    if (marca === '' || year === "" || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
        return;
    } 
    ui.mostrarMensaje('Cotizando', 'exito')

    //ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    }

    //instaciar el seguro
    const seguro = new Seguro(marca,year,tipo);
    const total = seguro.cotizarSeguro();

    //Utilizar el prototype que va a cotizar
    ui.mostrarResultado(total,seguro);
}

