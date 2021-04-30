/*
• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Reutilice el método esMultiplo implementado para el ejercicio
anterior
*/
let readlineSync = require('readline-sync');
let numero= readlineSync.questionInt('ingrese una numero ');
let cantDivisores=0;

for(let i=1;i<=numero;i++){ // itero el for hasta el numero ingresado
    if(esMultiplo(numero,i)){ // llamo a la funcion es multiplo y le paso los valores con los que trabaja
        cantDivisores++;
    }
}


console.log("la cantidad de divisores que tiene el numero "+numero+" es "+cantDivisores);

function esMultiplo(num1,num2){ // con los valores que les llega consulta si es multiplo o no
    if((num1%num2)==0){
        return true;
    }else{
        return false;
    }
}



