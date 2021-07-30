## TP Objetos CASINO-POO

## Introduccion
El trabajo practico que realice consiste en generar un programa en el que se puedan realizar apuestas dentro de un casino.
Para ello utilice las dependencias readLineSync para poder pedirle al usuario que ingrese cuanto dinero desea apostar, dependiendo del juego a que numero le desea apostar y para que el usuario decida a cuales de los 4 juegos desea jugar. 

### Descripcion del progama
El programa comienza preguntandole al usuario a cual de todos los juegos desea jugar. 
Si el presiona 1 el juego al que jugara sera a la ruleta que le pedira al usuario que ingrese cuanto desea apostar y a que numero desea jugarle, luego generara un numero entre 1 y 37 y compara ambos numeros para saber si el usuario gano.

Si ingresa un 2 lo lleva a jugar al Crap que tambien le pedira al usuario un numero entre 1 y 12(si ingresa un numero que no esta entre esos valroes se lo volvera a pedir) y cuanto dinero desea apostar, luego el programa simula el tiro de 2 dados, suma sus valores y compara con el numero ingresado por el usuario para ver si gano o perdio.

En caso de que ingrese un 3, lo lleva a jugar al tragamonedas padre que lee del txt un valor, se lo asigna a la variable probalidad  y le  genera 3 numeros aleatorios entre 1 y el valor maximo de probalidad, a la vez le genera un numero aleatorio al usuario entre los mismos valores y luego hace la comparacion para determinar si gano o perdio

Si el apostador ingresa un 4, jugara al tragamonedas Hijo que en vez de generar 3 numeros genera 5 ademas del que le genera al usuario, si todos los numeros coinciden, el valor de la apuesta se multiplicara por 5

Si el usuario ya no desea jugar mas, al ingresar un 5 saldra del casino

## Guia para correr el programa

npm i (para descargar las dependencias necesarias)

npm run tp 