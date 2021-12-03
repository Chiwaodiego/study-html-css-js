// --------------- variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// --------------- EVENT LISTNERS

eventListeners();
function eventListeners () {
    formulario.addEventListener('submit', agregarTweet);
    
}


//--------------- FUNCIONES

function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escrbie la informacion
    const tweet = document.querySelector('#tweet').value;
    
    //validacion

        if (tweet === '') {
            mostrarError('No se pudo enviar si no hay datos escrito');
            // return; // evita que se ejectuen mas lineas  de codigo
            
        }
    
    // se creo una cosnt de tiempo actual
    const tweetObj = {
        id: Date.now(),
        tweet // si se pone tweet es lo mismo que tweet: tweet
    }
    // añadir al arreglom de tweets
    tweet = [...tweet. tweet];
    // un ves agregadi vamos a crear el HTML
    crearHTML();
    muestra un listado de los tweets


}

// mostrar mensaje de error
 function mostrarError(error) {
     const mensajeError = document.createElement('p');
     mensajeError.textContent = error ;
     mensajeError.classList.add('error');

     //insertar en el Contenido
     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeError);

     // elimina la alerta depues de 3 segundos


     setTimeout( ()=>{
         mensajeError.remove();
     }, 3000)
     
 }