//Con esta linea importamos en este archivo la clase de multiplicar
//const { argv, options } = require("yargs");
const { crearArchivo } = require("./ayuda/multiplicar");
const argv =  require('./config/yargs');

//Proceso
console.log(process.argv);

console.clear();





//Construir una promesa para usar el método
crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(`${nombreArchivo} creado`.zebra) )
    .catch( err => console.log(err) );