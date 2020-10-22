const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de un trabajo / tarea por hacer'
    }
}

const optsLst = {
    estado: {
        alias: 'e',
        default: 'C',
        desc: 'C lista completas  / P lista pendientes '
    }
}

const optsAct = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de un trabajo / tarea por hacer'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: 'Actualiza la tarea o no dependiendo el valor'
    }
}

const argv = require('yargs')
    .command('listar', 'Lista el contenido de la tabla', optsLst)
    .command('crear', 'Crea una tarea con una descripcion', optsCrear)
    .command('act', 'Actualiza el estado de una tarea', optsAct)
    .command('borrar', 'Borra una tarea', optsCrear)
    .help()
    .argv;

//console.log(argv);
module.exports = {
    argv
}