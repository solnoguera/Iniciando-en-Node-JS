//YARGS : Configuracion
const argv = require('yargs')
    .option('b', {
        "alias": "base",
        "type" : "number",
        "demandOption" : true,
        "describe" : "Es la base de la tabla de multiplicar."
    })
    .option('l', {
        "alias" : "listar",
        "type" : "boolean",
        "demandOption" : false,
        "default" : false,
        "describe" : "Mostrar la tabla en consola"
    })
    .option('h', {
        "alias": "hasta",
        "type" : "number",
        "demandOption" : false,
        "default" : 10,
        "describe" : "Es la base de la tabla de multiplicar."
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ) {
            throw "La base debe ser un numero."
            }
        if (typeof argv.l != 'boolean'){
            throw "Listar debe ser un booleano."
        }
        return true;
        })
        .argv;


//Exportamos
module.exports = argv;