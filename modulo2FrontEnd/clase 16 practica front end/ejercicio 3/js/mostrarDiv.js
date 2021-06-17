/*
Hacer una pagina que al presionar un botón cree un div con posición, tamaño y color aleatorio.
*/

"use strict"

let btn=document.querySelector("#boton") 
btn.addEventListener("click", cambiarEstilo);
let div=document.querySelector(".div-aleatorio");

function cambiarEstilo() {
        div.style.backgroundColor =`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)},${aleatorio(0,255)})`;
        div.style.marginLeft = `${aleatorio(0,1100)}px`;
        div.style.marginTop = `${aleatorio(0,180)}px`;
        //div.style.Rigth= `${aleatorio(0,180)}`;
      // div.style.marginBotton= `${aleatorio(0,180)}`;
      //div.style.backgroundColor ="rgb("+aleatorio(0,255)+","+aleatorio(0,255)+","+aleatorio(0,255)+")";
}



function aleatorio(menorValor,mayorValor){
    return Math.floor(Math.random() * ((mayorValor+1) - menorValor) ) + menorValor;
}