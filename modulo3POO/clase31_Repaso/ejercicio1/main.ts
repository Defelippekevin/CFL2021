import * as RLS from "readline-sync";
import lista from "./listaReproduccion";
import gestorListas from "./gestorListas";

let listaPistasDisponibles: lista;
listaPistasDisponibles = new lista("canciones");
listaPistasDisponibles.cargarPistas('lista.txt','\n');

let gestor: gestorListas;
gestor = new gestorListas();


imprimirMenu ();

let opcion: string = RLS.question('Ingresa una opcion, X para finalizar: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case '1': {
            listaPistasDisponibles.mostrarLista();
            break;
        }

        case '2': {
            gestor.crearLista();
            break;
        }

        case '3': {
            gestor.AgregarPistaALista();
            break;
        }

        case '4': {
            gestor.BorrarPistaEnLista();
            break;
        }

        case '5': {
            console.log("La duracion de la lista completa es: " + gestor.duracionLista())
            console.log("La cantidad de temas es: " + gestor.cantidadDeTemasDeLista());
            break;
        }
        
    }
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}

function imprimirMenu (){
        console.log ("A continuacion elegi una opcion: \n 1 - Ver temas disponibles \n 2 - Crear nueva lista de reproducción \n 3 - Agregar tema a lista \n 4 - Eliminar tema \n 5 - Caracteristicas de lista: \n" )
}