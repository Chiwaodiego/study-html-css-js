
// variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Funciones

cargarEventListeners();

function cargarEventListeners() {
    // cuando agregas un curso presionando "agrega al carrito"
    listaCursos.addEventListener('click', agregarCurso);
    
    // eleminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        let articulosCarrito = []; // reseteamos el array

        limpiarHTML(); // eliminamos todo el hmtl
    });
    //cuando el usuario agrega a nuevo elemento al almance 
    document.addEventListener('DOMContentLoaded', () =>{
    listaCursos.addEventListener('click', agregarCurso);
        articulosCarrito = JSON.parse(localStorage.getItem('articulosCarrito')) || [];
        console.log(articulosCarrito);
        
        carritoHTML();

    });
}

function agregarCurso(e) {
    e.preventDefault();
    
    if (e.target.classList.contains('agregar-carrito')){ 
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
    }
}



// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso') ) {
         // e.target.parentElement.parentElement.remove();
         const cursoId = e.target.getAttribute('data-id')
         
         // Eliminar del arreglo del carrito
         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

         carritoHTML();
    }
}

//Lee el contenido de HTML al que le dimos click y extrae la informacion del curso

function leerDatosCurso(curso){
    // console.log(curso);
    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    // controla si un elemento ya exitste en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if( existe ) { 
        // utilizamos un map porque devuelve el arreglo porque si usas un each undifined
        const cursos = articulosCarrito.map( curso => {
             if( curso.id === infoCurso.id ) {
                  curso.cantidad++;
                   return curso;
              } else {
                   return curso;
           }
        })
        articulosCarrito = [...cursos];
   }  else {
        articulosCarrito = [...articulosCarrito, infoCurso];
   }
    carritoHTML();
}

// muestra el carrito de compras en el html
function carritoHTML(){

 //limpiar el HTML
    limpiarHTML();


// Recorre el carrito y genera el HMTL

    articulosCarrito.forEach ( curso => {
        //Se aplico destrocturing para no estar llamando cada curso.elemento , eso hace que curso ya tenga acceso a los elementos del objeto.
        const {imagen, titulo, precio, cantidad} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `

        <td><img src="${imagen}"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> <a href${curso.titulo}</td>
        <td> <a href="#" class="" ${precio}</td>
        <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
        `;
        // agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
        sincronizarStorage();

    })
    
}

//guarda informaicon en LS
function sincronizarStorage() {
    localStorage.setItem('articulosCarrito',JSON.stringify(articulosCarrito));
    
}


// elimina los cursos del tbody antes que pase por el foreach
function limpiarHTML(){
    //forma lenta
    // contenedorCarrito.innerHTML = '';
    
    // forma rapido y mejor performans
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

/* Ruta de objetivos al crear un carrito
1 -  crear variable de cada selecctor que redirige al elemento html
2- crear una funcion click 
!siempre mantener ordenado las variable y fucniones apartes
3- luego otra funcion que haga target al elemento boton de la funcion click
verificar los target con 
function agregarCursos(e){
    console.log(e.target.classList)}
4 -  primero leer los datos de la informacion a ubicar  con una funciony extraer la funcion del elemento
5 - crear un objeto que extraiga los datos  del punto 4 
6 - agregar el objeto en la variable constante que va almacenar el objeto
artiuclosCarrito = [...artiuclosCarrito, infocurso que es el objeto del paso 5]
8 - mostrar el objeto en html por each, crear funciones que limpien el codigo
9 -  agregar cantidad al carrito
10 - eliminar los objetos 
    
*/