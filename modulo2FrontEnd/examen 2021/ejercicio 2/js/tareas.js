"use strict";
let tarea= document.querySelector("#botonagregarTarea");
tarea.addEventListener("click", agregartarea);
let borrarTarea= document.querySelector("#botonBorrarTarea");
borrarTarea.addEventListener("click", borrarTodasLasTareas);
let listaTareas= document.querySelector("#tareaAgregada"); 

let tareas= [];

function agregartarea(){

    let nuevaTarea= document.querySelector("#valorInput").value;
    tareas.push(nuevaTarea);
    actualizarTareas();
   
}

 function actualizarTareas(){
    listaTareas.innerHTML = " ";
   for(let i=0; i<tareas.length; i++){
      let creoLi = document.createElement("li");
      creoLi.innerHTML = tareas[i];
      listaTareas.appendChild(creoLi);

   }
 }


 function borrarTodasLasTareas(){

    tareas=[];
    actualizarTareas();
}
