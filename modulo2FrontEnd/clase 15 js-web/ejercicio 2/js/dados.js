"use strict"
let suma= document.querySelector("#suma");
let cant7= document.querySelector("#cantSiete");
let botonLanzar  = document.querySelector("#lanzarDados");
botonLanzar.addEventListener("click",lanzarDados);

function lanzarDados(){
//let sumaDados=0;
let contador7=0;
let dado1;
let dado2;
let total=0;

  for(let i=1;i<=1000;i++){
    dado1= getDiceNumber();
    dado2= getDiceNumber();
    
    console.log("iteador i "+i);
      total = dado1 + dado2;
      console.log("suma de dados "+total);
         if(total==7){
         contador7++;
        }   
       // sumaDados= sumaDados + total;
       
    }   
    suma.innerHTML=total;

cant7.innerHTML=contador7;
}

function getDiceNumber(){
    return   Math.floor((Math.random() * 6) + 1);  
}