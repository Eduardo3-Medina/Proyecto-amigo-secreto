// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES
let listaNombres = [];


//FUNCION PARA AGREGAR AMIGOS.
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

//FUNCION PARA LIMPIAR LA CAJA DE ENTRADA.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
// FUNCION PARA COLOCAR EN UNA LISTA CADA UNO DE LOS NOMBRES.
function actualizarLista() {
    let enlistado = document.querySelector(".result-list");
    enlistado.innerHTML = ""; // Limpiar la lista antes de actualizar
    listaNombres.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        enlistado.appendChild(li);
    });
}

//FUNCION PARA SORTEAR LOS NOMBRES.
function sortearAmigo() {
    let nombreAleatorio = listaNombres[Math.floor(Math.random()*listaNombres.length)];
    console.log(nombreAleatorio)
    while (listaNombres > 0) {
        let nombreEliminado = listaNombres.splice(nombreAleatorio,1)[0];
        console.log(nombreEliminado);
    }
}