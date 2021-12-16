const ciudades = ['Londees', 'New york','Madrid','Paris'];
const ordenes = new Set([123,231,131,102] );
const datos  = new Map();

datos.set('nombre', 'Juan');
datos.set('Profesion','Deasrrollador Web');

// for ( let entry of ciudades.entries()){
//     console.log(entry);
// }
// for ( let entry of ordenes.entries()){
//     console.log(entry);
// }
// for ( let entry of datos.entries()){
//     console.log(entry);
// }

//! value Iterator\
    
    // recore el array
    // for ( let value of ciudades.values()){
    //     console.log(value);
    // }
    // for ( let value of ordenes.values()){
    //     console.log(value);
    // }
    // for ( let value of datos.values()){
    //     console.log(value);
    // }

//! keys Iterator
// retorna las llave de un array, en un set retorna los valores, y map solo la propiedad

// for ( let keys of ciudades.keys() ){
//     console.log(keys);
// }
// for ( let keys of ordenes.keys() ){
//     console.log(keys);
// }
// for ( let keys of datos.keys() ){
//     console.log(keys);
// }

//! Valores de default 

for ( let ciudad of ciudades){
    console.log(ciudad);
}
for ( let ciudad of ordenes){
    console.log(ciudad);
}
for ( let ciudad of datos){
    console.log(ciudad);
}