/*
Genere una cadena con los números del 1 al 100 (usando ciclos), 
y agreguelos mediante Javascript al cuerpo de la página al presionar un botón.
*/



let boton= document.querySelector("#button");
    boton.addEventListener("click", mostrar);

    function mostrar() {

        for(let i=0;i<=100;i++){

            cadenaNum.innerHTML += "<li>" + i + "</li>";
        }
    }