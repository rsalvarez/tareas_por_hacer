const argv = require('./config/yargs').argv;
const pH = require('./por-hacer/por-hacer');
const colors = require('colors');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = pH.crear(argv.descripcion)
            //let resultado = pH.guardarDb(tarea);
        console.log("Tarea creada : " + tarea.descripcion);
        break;
    case 'listar':
        let listado = pH.getListado();
        listado.forEach(tarea => {
            console.log("===================".green);
            console.log(("Tarea : " + tarea.descripcion).blue);
            console.log("Estado: [" + tarea.completada + "]");
            console.log("===================".green);
        });
        break;
    case 'act':
        let act = pH.actualizar(argv.descripcion, argv.completado);
        console.log(act);
        break;
    case 'borrar':
        let borrar = pH.borrarTarea(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log("no reconozido");
        break;
}