// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES
let listaNombres = [];

//FUNCION PARA AGREGAR AMIGOS.
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, inserte un nombre.")
    } else {
        listaNombres.push(nombre);
    }
    console.log(listaNombres);
    limpiarCaja()
}

//FUNCION PARA LIMPIAR LA CAJA DE ENTRADA.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';

}

//OBTENER EL ELEMENTO DE LA LISTA.
let enlistar = document.getElementById("resultado");
enlistar.innerHTML = "";

for (let i of listaNombres) {
    let li = document.createElement("li");
    li.textContent = i;
    enlistar.appendChild(li);
    console.log(i)
}