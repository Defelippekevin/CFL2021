let readlineSync = require('readline-sync');

let palabra= readlineSync.question(" ingrese una palabra ");
let letras='abcdefghijklmnopqrstuvwxyz';
let todaslasLetras= letras.length;
let ocurrencias= new Array(todaslasLetras);
let cuentaLetras=0;

function inicializar(ocurrencias){
    for (let i = 0; i< ocurrencias.length; i++) {
        ocurrencias[i];
        
    }
}


function contarLetras(letras,palabra,ocurrencias){
    let textoLocal= palabra.toLowerCase();
    let cantidadTotalLetras=0;
    for (let i = 0; i< letras.length; i++) {        
        ocurrencias[i]= cuantasVecesEsta(textoLocal,textoLocal.length,letras[i]);
        cantidadTotalLetras+=ocurrencias[i];
    }
    return cantidadTotalLetras;
}

function cuantasVecesEsta(texto,largo,letra){
    let ocurrencia=0;
    for(let i=0;i<largo;i++){
        if(texto[i]==letra){
            ocurrencia++;
       }
   }
   return ocurrencia;
}


function informar(letras,ocurrencias,totalLetras){
console.log("en el texto ingresado hay  ",totalLetras);

    for (let i = 0; i < letras.length; i++) {
        if(ocurrencias[i]!=0){
            console.log("la letra ",letras[i]," aparece ",ocurrencias[i], "con una probalidad de ",(ocurrencias[i]/totalLetras));
        }

    }

}

inicializar(ocurrencias);
cuentaLetras=contarLetras(letras,palabra,ocurrencias);
console.log("lo que me da contar letras ",cuentaLetras);
informar(letras,ocurrencias,cuentaLetras);