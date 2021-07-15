import * as RLS from 'readline-sync';
import GestorLibro from "./GestorLibros"; 

let gestor: GestorLibro = new GestorLibro();
gestor.cargarLibros();
gestor.mostrarLibros();

//menu de opciones CRUD
let opcion: string = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
let titulo: string;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            gestor.addLibro();
            break;
        }
        case 'R': {
            titulo = RLS.question('Ingrese la titulo a buscar: ');
            console.log(`Encontre la titulo en la posicion ${gestor.findLibro(titulo)}.`);
            break;            
        }
        case 'U': {
            titulo = RLS.question('Ingrese la palabra a buscar y reemplazar: ');
            gestor.updateLibro(titulo);
            break;
        }
        case 'D': {
            titulo = RLS.question('Ingrese la titulo a eliminar: ');
            gestor.deleteLibro(titulo);
            break;                        
        }
    }
    gestor.mostrarLibros();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
} 