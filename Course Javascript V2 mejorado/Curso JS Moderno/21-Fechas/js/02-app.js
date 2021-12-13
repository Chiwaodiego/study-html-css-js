//formatos de fechas

    // const EEUU = new Date();

    // const Latam = new Date().toLocaleString();
    // const Latam2 = new Date().toLocaleTimeString();
    // const Latam3 = new Date().toLocaleDateString();

    // console.log(EEUU);
    // console.log(Latam);
    // console.log(Latam2);
    // console.log(Latam3);

// formato moments

const diaHoy = new Date();

moment.locale('es');
console.log(moment().format('MMMM Do YYYY h:mm:ss a'));
    // tambien se puede cambiar de lugar datos
    // a indica pm o am
console.log(moment().format('LLLL', diaHoy));

console.log(moment().add(3,'day').calendar());
//este formato es muy usado para fecha limite o para cupones o examnes. Se implement como condicion.