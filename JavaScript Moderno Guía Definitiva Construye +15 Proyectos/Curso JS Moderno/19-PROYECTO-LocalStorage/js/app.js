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