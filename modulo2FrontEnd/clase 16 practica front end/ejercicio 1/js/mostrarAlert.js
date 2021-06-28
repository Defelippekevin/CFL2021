/*
Muestre un mensaje de alerta al presionar un botón si el valor introducido en un campo de texto es negativo
 y en otro campo de texto positivo.
 ¿Cómo cambiaría si la condición fuera que alguno de los dos fuera positivo?
*/
"use strict";



let btn = document.querySelector("#boton")
btn.addEventListener ("click", evaluarDatos)

function evaluarDatos() {
    let input1 = document.querySelector("#input-1");
    let input2 = document.querySelector("#input-2");
    if ((((input1.value)> 0) & (input2.value<0)) || (((input1.value)< 0) & (input2.value>0))) { //deberia cambiar
        alert("Un numero es positivo y el otro es negativo");
    }
    
}


