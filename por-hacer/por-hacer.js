//const { require } = require("yargs");

const { ok } = require('assert');
const fs = require('fs');

let listadoPh = [];

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completada: false
    }

    listadoPh.push(porHacer);

    guardarDb();
    return porHacer;
}

const cargarDb = () => {
    try {
        listadoPh = require('../db/data.json');

    } catch (error) {
        listadoPh = [];
    }


}

const getListado = (completado) => {
    cargarDb();
    return listadoPh;
}

const borrarTarea = (descripcion) => {
    cargarDb();
    let indice = listadoPh.filter(tarea => tarea.descripcion != descripcion);
    //listadoPh.pop(indice);
    if (listadoPh.length == indice.length) {
        return "No se borro";
    } else {
        listadoPh = indice;
        guardarDb();
        return "Se borro OK.";
    }

}

const actualizar = (descripcion, completado) => {
    cargarDb();
    console.log(descripcion + " " + completado);
    let indice = listadoPh.findIndex(tarea => tarea.descripcion == descripcion);
    if (indice >= 0) {
        listadoPh[indice].completada = completado;
        guardarDb();
        return "Ok";
    } else {
        return "No encontrado";
    }

}

const guardarDb = () => {
    let data = JSON.stringify(listadoPh);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err)
            throw new Error('No e pudo grabar');
        else
            return "Tarea guardada OK";
    });
}



module.exports = {
    crear,
    guardarDb,
    getListado,
    actualizar,
    borrarTarea
}