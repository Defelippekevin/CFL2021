/*
Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero
*/

let readlineSync = require('readline-sync');

let multiplo1= readlineSync.questionInt('ingrese una numero ');
let multiplo2= readlineSync.questionInt('ingrese una numero ');


console.log("el primer numero "+multiplo1+" es multiplo del segundo numero "+multiplo2+" : " 
+esMultiplo(multiplo1,multiplo2));


function esMultiplo(num1,num2){

    if((num1%num2)==0){
        return true;
    }else{
        return false;
    }

}
