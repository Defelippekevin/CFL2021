
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

function estiloAleatorio() {
    let intervalo=setInterval(function() {
    let contador=0;
    if (contador===20) {
    clearInterval(intervalo);
    }else{
    contador++;
    let div=document.getElementById("miDiv");
    div.style.backgroundColor=`rgb(${aleatorio(0,255)},${aleatorio(0,255)},${aleatorio(0,255)})`;
    div.style.fontSize=`${aleatorio(30,200)}px`;
    div.style.marginLeft=`${aleatorio(0,100)}px`;
    }
    console.log(contador);
    },1000); 
}




