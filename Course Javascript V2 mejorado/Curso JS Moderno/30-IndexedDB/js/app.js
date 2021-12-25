
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout( () => {
        crearCliente();
    }, 5000 );
})


function crmDB() {
    // Crear base de datos version 1.0
    // se crea versiones 
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error , Tipos de error: no soporta el navegador o hay un dato unico repetido
    crmDB.onerror = function () {
        console.log('Hubo un error a la hora de crear la DB');

    }

    // si se creo bien

    crmDB.onsuccess = function () {
        console.log('base de datos creada');
        DB = crmDB.result;
    }
    
    //  Configuracion de la base de datos\
    // * Se ejecuta una sola vez si la base de datos a sido creada.

    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;
        
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true // aumenta a medida que se crea nuevas versiones
        });

        // Definir las columnas
            //* parametro1 = es el crm / par2 = keypath / par3 si es unico o no
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});

        console.log('comlumnas Creadas');

    }

}


//* para diferentes operaciones, obtener registros, eleminarlos o actualizarlos
function crearCliente () {
    //TODO crm indica donde va guardar la base de datos , modo de dato: readwrite o readonly  

    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function () {
        console.log('Transaccion Completada');
    }
    transaction.onerror = function () {
        console.log('Hubo un error en la transaccion');
    }
    
    //utilizar la base de datos
    const objectStore = transaction.objectStore('crm');

    //llenar formulario objeto
    
    const nuevoCliente = {
        telefono: 12352525,
        nombre: 'Juan',
        email: 'correo@coreeo.com'
    }
    

    //*agregamos el objeto a la  base de datos, o tambien modificar o eliminar
    // put or delete

    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}