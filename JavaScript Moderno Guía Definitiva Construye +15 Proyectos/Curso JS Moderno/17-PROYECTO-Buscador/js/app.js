
// //
// 1- crear la variables,eventos, funciones
// 2-  funcion que muestre las marcas en funcion y luego insert htmml y aplicar destructuring
// 3-  lueog crear una funcion event listener para saleccionar los elementos del objetoo
// 4 - crear una fucntion flitrar de alto nivel. una funcion dentro de otra
// 5 - repetir la funcion para cada elemento , con filter chain
// ver si se puede solucionar usan funciones sin abordar tantos texto.
// 6 - imprimir html del filtrados
// 7 -  crear funcion de limpiar del html reciente
// 8 - crear funcion que filtre por rango ejemplo precios
// 9 - 


// variable

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor de los resultados filtrados
const resultado = document.querySelector('#resultado');

// funcion para obtener el año actual
const max = new Date().getFullYear();
const min = max - 10 ; 

// generar un objeto con la busqueda
const datosBusqueda = {
    marca : '' ,
    year : '' ,
    minimo : '' ,
    maximo : '' ,
    puertas : '' ,
    transmision : '' ,
    color : '' ,
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //muestra los autos al cargar

    //Llena las opciones de años
    llenarSelect();
})

// Event listener para los select de busqueda largo
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
// Event listener para los select de busqueda largo
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})
// Event listener para los select de busqueda largo
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = parseInt(e.target.value);
     filtrarAuto();
})
// Event listener para los select de busqueda largo
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
})
// Event listener para los select de busqueda largo
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})
// Event listener para los select de busqueda largo
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
// Event listener para los select de busqueda largo
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
 
    

})





// Funciones
function mostrarAutos(autos) {
    limpiarHTML(); // ELImina ep html previo
    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas ,color, transmision} = auto;
        const autoHTML = document.createElement('p');
        
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas -  Transmision:  ${transmision} -  Precio: $ ${precio} - Color: ${color}`;
        //insertar en el html
        resultado.appendChild(autoHTML);
    })

}
// limpiar html
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}



// genera los años del select
function llenarSelect(){
    // Se pone al reves para que muetra el orden 2020 primero en la lista
    for(let i = max; i >= min; i--){
     
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // agrega las opciones de año al select
    }
}

// funcion que filtra en base a la busqueda
function filtrarAuto(auto) {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    // console.log(resultado);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
    
}

function noResultado () {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay Resultados ,  intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado);
}




//funcion de alto nivel


function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if (marca) { 
        return auto.marca === marca ;
    }
    else {return auto;}
}
// en esta funcion se tiene que pasar el año numero
function filtrarYear (auto) {
    const {year} = datosBusqueda;
    if (year) { 
        return auto.year === year ;
    }
    else {return auto;}
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if (minimo) { 
        return auto.precio >= minimo ;
    }
    else {return auto;}
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if (maximo) { 
        return auto.precio <= maximo ;
    }
    else {return auto;}
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if (puertas) { 
        return auto.puertas === puertas ;
    }
    else {return auto;}
}
function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if (transmision) { 
        return auto.transmision === transmision ;
    }
    else {return auto;}
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if (color) { 
        return auto.color === color ;
    }
    else {return auto;}
}