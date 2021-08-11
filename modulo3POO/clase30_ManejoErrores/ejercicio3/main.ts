import * as RLS from 'readline-sync';
import RegistroAutomotor from './RegistroAutomotor';

let registro: RegistroAutomotor = new RegistroAutomotor();

registro.cargarAutos('autos.txt','\n');
registro.mostrarAutos();


function checkPatente(patente:string){
    if(patente.length>6){
        throw new Error("la patente excede la cantidad de caracteres maximos");
    }
}

//menu de opciones CRUD
try{
let opcion: string = RLS.question('Ingrese una opcion, C para registrar un auto, R para buscar un auto, U para actualizar datos de un auto y D para eliminar un auto del registro,  X para finalizar: ').toUpperCase();

if(opcion != 'C' && opcion!= 'R' && opcion !='U' && opcion!='D'){
    throw new Error(" la letra que ingreso no responde a un comando ");
}
let patente: string;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.addAuto();
            break;
        }
        case 'R': {
            patente = RLS.question('Ingrese la patente a buscar: ');
            checkPatente(patente);
            console.log(`Encontre la patente en la posicion ${registro.findAuto(patente)}.`);
            break;            
        }
        case 'U': {
            patente = RLS.question('Ingrese la patente a buscar y reemplazar: ');
            checkPatente(patente);
            registro.updateAuto(patente);
            break;
        }
        case 'D': {
            patente = RLS.question('Ingrese la patente a eliminar: ');
            checkPatente(patente);
            registro.deleteAuto(patente);
            break;                        
        }
    }
    registro.mostrarAutos();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();    
    }

}catch(error){
    console.log(error.message);
    
}