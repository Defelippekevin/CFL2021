import Casino from './Casino';
import * as RLS from 'readline-sync';

let casino:Casino = new Casino();

let opcion= RLS.question('Ingrese 1 si quiere jugar a la ruleta, 2 si quiere jugar al crap, 3 si quiere jugar al tragamonedas facil o 4 si quiere jugar al tragamonedas dificil, ingrese cualquier otra tecla para finalizar ');

    while(opcion=='1' || opcion=='2' || opcion=='3' || opcion=='4'){
    switch (opcion) {
        case '1': {
            casino.jugarRuleta();
            break;
        }
        case '2': {
            casino.jugarCrap();
            break;            
        }
        case '3': {
            casino.jugarTragamonedas();
            break;
        }
        case  '4': {
            casino.jugarTragamonedasHijo();
            break;                        
        }
    }
    opcion= RLS.question('Ingrese 1 si quiere jugar a la ruleta, 2 si quiere jugar al crap, 3 si quiere jugar al tragamonedas facil o 4 si quiere jugar al tragamonedas dificil, ingrese cualquier otra tecla para finalizar ');

}

console.log("gracias por visitar nuestro casino");
