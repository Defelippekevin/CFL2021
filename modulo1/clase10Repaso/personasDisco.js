

let edadMinima = 19;
let edadMaxima = 40;
let dimension=270;
let personas = new Array(dimension);
let menor21;
let mayor21;



function cargarArregloAleatorio(edadMin, edadMax, array, dimension){
    for(let i=0; i<dimension;i++){

        array[i]= Math.floor(Math.random()*(edadMax-edadMin))+edadMin;
    }
    return array;

}


function contarMenores(array){
    let contar=0; 
    for(let i=0; i<dimension;i++){

        if(array[i]<=21){
            contar++;
        }
    }
    return contar;
}

cargarArregloAleatorio(edadMinima,edadMaxima,personas,dimension);

menor21=contarMenores(personas);

mayor21 = dimension-menor21


console.log("los menores de 21 son " + menor21);

console.log("los mayores de 21 son " + mayor21);

console.log("el total de personas en la disco es "+(menor21+mayor21));


