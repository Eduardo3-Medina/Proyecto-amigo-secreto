// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES
let listaNombres = [];
let enumeracion = 0;

//FUNCION PARA AGREGAR AMIGOS.
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
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
    let enlistado = document.querySelector("#listaAmigos");
    enlistado.innerHTML = ""; // Limpiar la lista antes de actualizar
    listaNombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        enlistado.appendChild(li);
    });
}
actualizarLista();

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("La lista esta vacia");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*listaNombres.length);
    let amigoSorteado = listaNombres[indiceAleatorio];

    document.getElementById("resultado").textContent = `tu amigo secreto es: ${amigoSorteado}`

    listaNombres.splice(indiceAleatorio,1);
    actualizarLista();

    if (listaNombres.length === 0) {
        alert("¡Todas las personas ya fueron sorteadas!")
    }
}