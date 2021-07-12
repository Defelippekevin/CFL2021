import * as RLS from 'readline-sync';
import RegistroAutomotor from './RegistroAutomotor';

let registro: RegistroAutomotor = new RegistroAutomotor();
registro.cargarAutos();
registro.mostrarAutos();

//menu de opciones CRUD
let opcion: string = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
let patente: string;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.addAuto();
            break;
        }
        case 'R': {
            patente = RLS.question('Ingrese la patente a buscar: ');
            console.log(`Encontre la patente en la posicion ${registro.findAuto(patente)}.`);
            break;            
        }
        case 'U': {
            patente = RLS.question('Ingrese la palabra a buscar y reemplazar: ');
            registro.updateAuto(patente);
            break;
        }
        case 'D': {
            patente = RLS.question('Ingrese la patente a eliminar: ');
            registro.deleteAuto(patente);
            break;                        
        }
    }
    registro.mostrarAutos();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}