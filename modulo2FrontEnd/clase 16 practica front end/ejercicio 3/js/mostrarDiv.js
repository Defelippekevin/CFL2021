/*
Hacer una pagina que al presionar un botón cree un div con posición, tamaño y color aleatorio.
*/
"use strict"
let btn=document.querySelector("#boton") 
btn.addEventListener("click", cambiarEstilo);
let div=document.querySelector(".div-aleatorio");

let parar= document.querySelector("#stop");

function cambiarEstilo() {
        let contador=20;
        
        let intervalo= setInterval(function (e) {
          if(contador===0){
            clearInterval(intervalo);
          }else{
            
           // contador--;
            div.style.backgroundColor =`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)},${aleatorio(0,255)})`;
            div.style.marginLeft = `${aleatorio(0,1100)}px`;
            div.style.marginTop = `${aleatorio(0,300)}px`;
            let tamaño=`${aleatorio(10,400)}px`;
            div.style.height= tamaño;
            div.style.width= tamaño;
          }
        },1000); // cada cuanto tiempo el div cambia de lugar
        parar.addEventListener("click", function (e) {
          clearInterval(intervalo);
          
        })
      //``
}
 //div.style.Rigth= `${aleatorio(0,180)}`;
      // div.style.marginBotton= `${aleatorio(0,180)}`;
      //div.style.backgroundColor ="rgb("+aleatorio(0,255)+","+aleatorio(0,255)+","+aleatorio(0,255)+")";
function aleatorio(menorValor,mayorValor){
    return Math.floor(Math.random() * ((mayorValor+1) - menorValor) ) + menorValor;
}


