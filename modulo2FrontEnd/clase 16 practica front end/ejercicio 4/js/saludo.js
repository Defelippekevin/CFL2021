/*
4. Cree una pagina con un input, un checkbox y un boton. Al presionar el boton, 
si el checkbox está seleccionado debe aparecer un saludo en un h1 y sino en un h2.
*/
"use strict";


let comprobacion = document.querySelector("#valido");

let btn=document.querySelector("#buton") 
btn.addEventListener("click", saludo);

console.log(comprobacion);


function saludo(){
    
    if(comprobacion.checked){
        saludo_en_h1.innerHTML= "saludo en un h1";
    }else{
        saludo_en_h2.innerHTML= " saludo en un h2";
    }
}





