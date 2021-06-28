/*
Cree una página que tenga un text box, un label y un botón. Al hacer clic en el botón se deberá ejecutar una función javascript que, 
tomando lo ingresado en el text box, invierta las letras y lo imprima en la consola
Ejemplo:
Text box: Hola Mundo!
console.log: !odnuM aloH
*/




let btn=document.querySelector("#buton") 
btn.addEventListener("click", invertir);


function invertir(){
  let miInput = document.querySelector("#invertir").value; // agarro el texto que ingreso el usuario
console.log(miInput);

    let invertir = miInput.length; // guardo en invertir el largo del texto 
  let invertirTexto = "";

  while (invertir>=0) {
    invertirTexto = invertirTexto + miInput.charAt(invertir); 
    //  el método .charAt() invierte la cadena, pone el ultimo caracter al principio y asi con los demas
    invertir--;// voy disminuyendo el while, cuando llegue a 0 todo lo ingresado en el input estara invertido
  }

  console.log(invertirTexto);

}
