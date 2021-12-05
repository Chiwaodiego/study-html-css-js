// --------------- variables 

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];
// --------------- EVENT LISTNERS
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
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

    // Una ves agregado vamos a crer el HTML
    crearHTML();
    
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
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            //crear el HTML

            const li = document.createElement('li');

            //añadir  el texto
            li.innerText = tweet.tweet;

            // insertarlo en el html
            listaTweets.appendChild(li);


        });
        
    }
}
