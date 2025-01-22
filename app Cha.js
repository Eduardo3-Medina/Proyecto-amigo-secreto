// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES
let listaNombres = [];

//FUNCION PARA AGREGAR AMIGOS.
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
<<<<<<< HEAD
        alert("Por favor, inserte un nombre.")
    } else {
        listaNombres.push(nombre);
    }
    console.log(listaNombres);
    limpiarCaja()
=======
        alert("Ingrese nombre por favor");
    } else {
        listaNombres.push(nombre);
        actualizarLista();
    }
    limpiarCaja();
>>>>>>> main
}

//FUNCION PARA LIMPIAR LA CAJA DE ENTRADA.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

<<<<<<< HEAD
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
=======
function actualizarLista() {
    let enlistado = document.querySelector(".result-list");
    enlistado.innerHTML = ""; // Limpiar la lista antes de actualizar
    listaNombres.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        enlistado.appendChild(li);
    });
}
>>>>>>> main
