
// variable

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

addEventListener();

function addEventListener(){

    // cuando la app inicia
    document.addEventListener('DOMcontentLoaded', iniciarApp);

    // campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

    //enviar email
    formulario.addEventListener('submit', enviarEmail);

}

//funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

// valida el formulario
function validarFormulario(e) {
    if (e.target.value.length > 0 ) {

        // Elimina los erroes, del aviso de los campos
        const error = document.querySelector('p.error');
        if (error){
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
        
            // target hace referencia al campo actual
        if (er.test(e.target.value)){
            // Elimina los erroes, del aviso de los campos
            const error = document.querySelector('p.error');
            if (error){
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('Email no valido');
        }
    }
    // tener cuidado de copiar el target en este if porque esta validaando en referencia a los valore  que tenemos declarados
    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '' ){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    } 
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500','p-3', 'm-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0){
        formulario.appendChild(mensajeError);
    }
    
}

// enviar el email

function enviarEmail(e){
    e.preventDefault();
    
    //mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // mostrar el spinner Con 
    setTimeout( ()=>{
        spinner.style.display = 'none';
        

        // mensaje que se envio correctamente
        const mensajeEmail = document.createElement('p');
        mensajeEmail.textContent = 'El Formulario a sido enviado';
        mensajeEmail.classList.add('border', 'border-green-500', 'background-red-100', 'text-black-500','p-3', 'm-5', 'text-center')
        // inserta el parrafo
        formulario.insertBefore(mensajeEmail, spinner);
        setTimeout(() => {
            mensajeEmail.remove(); //Eliminar el mensaje
    
            resetearFormulario();
            
        }, 2000);
        
         
    }, 1000);
}

// funcion que resetea el form depsues de enviar el email
function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}




formulario.reset();

/* pasos de intruciones
1- crear variables y funciones
2 - bloquear el texto , luego vaalidar el texto.
3 - crar var de los inputs
4 - crear function validar formulario
    validar por caracteres. y corroborar que la funcione paso a paso.
    crear una funcion que no repita el aviso de campos
5 - funcion de mostrar error
6 - implemente un funciones expresiones regulares

*/