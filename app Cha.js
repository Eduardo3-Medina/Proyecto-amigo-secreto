// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Ingrese nombre por favor");
    } else {
        listaNombres.push(nombre);
        actualizarLista();
    }
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista() {
    let enlistado = document.querySelector(".result-list");
    enlistado.innerHTML = ""; // Limpiar la lista antes de actualizar
    listaNombres.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        enlistado.appendChild(li);
    });
}
