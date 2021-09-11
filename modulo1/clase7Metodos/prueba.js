
let rl= require('readline-sync'); // permite ingresar valores por teclado
let elem, arr, nro, ocu; // declaro las variables que voy a utilizar
elem= rl.questionInt('ingrese tamanio '); // pido un numero
arr= new Array(elem); // le digo a la variable arr que es un arreglo y que su tamaño es el tamaño que tiene guardado la variable elem
cargar(arr,elem); // llamo a la funcion encargada de cargar el arreglo
nro= rl.questionInt('ingrese numero: '); // le pido al usuario que ingrese un nro y lo guardo en la variable nro
ocu= metodo(arr,elem,nro); // ocu va a recibir lo que retorne el metodo llamado metodo
console.log("el numero "+nro+" .... "+ocu); // muestro por pantalla la cantidad de veces que el nro ingresado por el usuario se encuentra en el arreglo
 mostrar(arr,elem); // llamo a la funcion encargada de mostrar el arreglo
 
 
 function cargar(v,l){ // la funcion cargar recorre el arreglo a traves del for y lo va llenando con numeros aleatorios 
     for(let i=0;i<l;i++){
         v[i]= Math.floor(Math.random()*100);
     }
 }

 // la funcion mostrar recorre el arreglo a traves del for  y va mostrando los numeros con los que fue cargado
 function mostrar(v,l){
     let c= "";
     for(let i=0;i<l;i++){
         c+=v[i]+" ";
         console.log(c);
     }
 }

 // la funcion metodo recibe el arreglo, la dimension y el nro  y va recorriendo el arreglo y preguntando cuantas veces el nro ingresado por el usuario se encuentra en el arreglo, por cada vez que el numero esta en el arreglo se incrementa en 1 la variable c  
 function metodo(v,l,n){
     let oc;
     for(let i=0;i<l;i++)
         if(v[i]==n)
             oc++
         
     
 }

 /*
 PUNTO 2

el programa comienza permitiendo  ingresar valores por teclado, luego declara las variables que va a utilizar
Inicializa la variable elem, luego declara un arreglo y le da la dimension que tiene la variable elem, despues 
llama a la funcion cargar y le pasa el arreglo y la dimension por tamaño, la funcion cargar se encarga de recorrer el arreglo
e ir llenandolo con valores aleatorios.
Luego el usuario ingresa un numero por teclado y lo guarda en la variable nro
La variable ocu va a almacenar lo que retorne la funcion metodo a la cual se le pasa por parametro el arreglo cargado, la dimension del mismo y el nro ingresado previamente por el usuario
la funcion metodo va a ir recorriendo el arreglo y consultando si en cada posicion del arreglo se encuentra el nro que el usuario ingreso previamente.
El console.log va a encargarse de mostrar cuantas veces el numero ingresado por teclado se encuentra en el arreglo
Al final la funcion mostrar se encarga de recorrer el arreglo cargado, transformando en texto y guardando en c el contenido del arreglo, al final muestra la variable c

 */


/*


PUNTO 3

Para emepzar, la variable oc no esta igualada a 0. 
Despues en el bucle for y tambien en el if faltan las llaves "{" y "}".
Al final, fuera de la llave que cierra el for faltaria agregar un return de la variable oc, de esta forma la variable ocu va a tener un valor

function metodo(v,l,n){
     let oc;
     for(let i=0;i<l;i++){
         if(v[i]==n){
             oc++
        }
    }
    return oc;
}
*/


