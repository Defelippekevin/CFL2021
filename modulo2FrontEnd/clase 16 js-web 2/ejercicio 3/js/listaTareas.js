
let tarea= document.querySelector("#botonagregarTarea");
tarea.addEventListener("click", agregartarea);

function agregartarea(){
    "use strict";
    
   // event.preventDefault();
   
    let tareanueva;
    tareanueva = document.querySelector("#valorInput").value;
    document.querySelector("#tareaAgregada").innerHTML += "<li>" +tareanueva + "</li>";
}



