
"use strict";

let cantidad=0;


let btnSumar = document.querySelector("#botonSumar");
btnSumar.addEventListener("click",sumarX);

let btnRestar= document.querySelector("#botonRestar");
btnRestar.addEventListener("click",restarX);

let btnSumarMuchos= document.querySelector("#botonSumarMuchos");
btnSumarMuchos.addEventListener("click",sumarMuchos);



function sumarX(){
    cantidad++;
    contador.innerHTML = cantidad;

}

function restarX(){
    cantidad--;
    contador.innerHTML = cantidad;

}

function sumarMuchos(){
    let miInput = document.querySelector("#miInput").value;
    cantidad += Number(miInput);   

    contador.innerHTML = cantidad;

}