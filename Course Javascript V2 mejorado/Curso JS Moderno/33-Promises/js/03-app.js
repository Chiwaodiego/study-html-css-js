//! resolve se ejecuta cuando se cumpla el promise
//! reject cuando tenemos un problema en el promise

const aplicarDescuento = new Promise((resolve,reject) => {

    const descuento = true;

    if (descuento) {
        resolve('Descuento Aplicado')
    } else { reject('No se pudo aplicar el descuento')
    }
})
// console.log(aplicarDescuente);

//! en los promises se utiliza una syntaxis
aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(error))


// Hay 3 valores posibles...
// * fulfilled - El promise se cumplio
//* reject - El promise no se cumplio
//! pending - Caudno nose declara la estructura dentro del promise. No se ha cumplido o rechazado.
// Tambien aplicar un mensaje  then y catch

function descuento(mensaje) {
    console.log(mensaje);
}