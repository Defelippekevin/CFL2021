
let boton = document.querySelector("#cambiador");
boton.addEventListener("click", cambiarEstilo);


function cambiarEstilo() {
    let fondo = document.querySelector('#div');
    fondo.classList.toggle('informacion');

}