// --------------- variables 

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];
// --------------- EVENT LISTNERS
eventListeners();

function eventListeners() {
    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // cuando el documento esta listo, aplicar DOMcontentLoaded
    document.addEventListener('DOMContentLoaded',() => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];
        // agregar un or [] con un array vacio para que no salte errors null en la consola

        console.log(tweets);

        crearHTML();
    });
}


//--------------- FUNCIONES

function agregarTweet (e) {
    e.preventDefault();
    // textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    console.log(tweet);
    //validacion sin que repita el anuncion
    if (tweet === '') { 
        mostrarError('Un mensaje no puede ir vacio')
        return; // evita que se ejecuten mas lineas de codigo una forma de validar el texto
        
    }
    const tweetObj = {
        id: Date.now(),
        tweet // Si pones 1 solo valor es lo mismo que tweet: tweet
    }

    //Añadir al arreglo de tweets;
    tweets = [...tweets, tweetObj];

    // Una ves agregado vamos a crear el HTML
    crearHTML();
    
    // reiniciar el formulario , metodo reset
    formulario.reset();
}


// mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error ;
    mensajeError.classList.add('error');
s
    //Inserta en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // elimina la alerta despues de 3seg
    setTimeout( () => {
        mensajeError.remove();

    }, 3000 )


}


// Muestra un listado de los tweets

function crearHTML() {

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {

            // agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // añadir la funcion de eliminar del DOM
            btnEliminar.onclick = () =>{
                // pasar los parametros para indentificar que elemento borrar
                borrarTweet(tweet.id);
            }

            //crear el HTML

            const li = document.createElement('li');

            // añadir el texto
                // retorna y añade  el texto, recuerda que tweet 1st es la variable y 2rd tweet es el valor agregado
            li.innerText = tweet.tweet;
            
            // Asignar el boton

            li.appendChild(btnEliminar);

       

            // insertarlo en el html del id
            listaTweets.appendChild(li);


        });
        
    }
    sincronizarStorage();
}

// guardar informacion en local storage del array almacenado.
function sincronizarStorage () {
   
    localStorage.setItem('tweets',JSON.stringify(tweets));
    
}

// eliminar un tweet con filter, con parametro del id data now
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}


//Limpiar el html 
function limpiarHTML(){
    while ( listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// COMO emepzar un proyecto
// 1.1 - visualizar que variables van ser seleccionados
// 1 -  crear las variables que se van usar y arrays vacios a almacenar
// 2 -  crear eventlisteners que dispare las funciones y muestre en html 
// 3 - crear funciones que van obtener el dato y alamcenar
// 4 - crear validdacion de datos y funcion de mostrarerror  aparte
// 5 - despues insertar dentro de la funcion mostrarerror un setTimeout para que quite el anuncio
// 5.5 - crear un un objeto con que contenga los datos y luego otra function que traiga y muestro en html en lista
// 6 - crear uan function creathtml y mostrar en pantalla
// 7 -  limpiar el html anterior
// 8 - limpiar el textarea cada ves se envia la informacion
// 9 - almacenar la informacion en localstorage , funcion sincronizarstorage
// 10 - en local storage agregar un or [] para que no colpase las funciones + el llamado crearhtml
// 10.1 - crear un eventlisteners que actualize el array con el local storage.
// 11 - funcion de eleminar boton de los tweet del local
// 12 - agregando btn al boton y html del boton,
// 13 -  funcion de de tomar el id para depues borrrar
// 14 - funbcion eliminar los elementos del html con filter (creara otro array nuevo sin el elemento que eliminamos)
// despues de eso copiar la funcion creahtml para actualizar los datos del array.



