import * as readline from "readline-sync";

function sumar(numeros:number[]):number {
    let sum:number=0;

    for(let i:number= 0; i< numeros.length;i++){
        sum += numeros[i];
    }
    return sum;

    }
    let nombre = 'Juan';
    var arreglonumeros:number[]=[1,2,4,1];
    
    console.log(sumar(arreglonumeros));