
const reproductor = {
    reproducir : id => console.log(`Reproduciendo canción id ${id}`),
    pausar : () => console.log('pausando...') ,
    borrar : id => console.log(`Borrando canción con id: ${id}`) ,
    crearPlaylist : nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist : nombre =>console.log(`Reproduciendo la Playlist ${nombre}`),
    }


reproductor.reproducir(30);


// reproductor.reproducir(30);
// reproductor.pausar();

// // Tambien los métodos pueden quedarse por fuera
// // reproductor.borrar = function(id) {
    
// // }
// reproductor.borrar(20);
// reproductor.crearPlaylist('Heavy Metal');
// reproductor.reproducirPlaylist('Heavy Metal');

