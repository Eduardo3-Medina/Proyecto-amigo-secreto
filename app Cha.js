// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];
function lista (nombre) {

}

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    listaNombres += '' + nombre;
    console.log(listaNombres);
    limpiarCaja()
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';

}