//Realizar un algoritmo que dado un número entero ingresado por el usuario, 
//visualice en pantalla si es par o impar
// En el caso de ingresar un cero, se debe volver a pedir el número por
//teclado (hasta que se ingrese un número mayor que cero)

let readlineSync = require('readline-sync');

let numero= readlineSync.questionInt('ingrese una numero ');


while(numero==0){// comparo si el numero ingresado es 0
    
   

  
    numero= readlineSync.questionInt('ingrese una numero,si desea salir ingrese un 0 '); // si es 0 le pido otro numero
}
if(numero%2!==0){ // verifico si es impar o par
    console.log(" el numero que ingreso "+numero+" es impar"); 

}else{
console.log("el numero que ingreso "+ numero+" es par");
}





