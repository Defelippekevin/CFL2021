import Alarma from "./Alarma";
import AlarmaLuminosa from "./AlarmaLuminosa";
import Luz from "./Luz";
import Timbre from "./Timbre";

let alarma:Alarma = new Alarma();
let alarmaLuz:AlarmaLuminosa= new AlarmaLuminosa();
let timbre:Timbre= new Timbre();
let luz:Luz= new Luz();

/*
console.log(alarma);
alarma.setMovimiento(true);
console.log(alarma);


console.log(alarmaLuz);
console.log(timbre);
timbre.setTimbre(true);
console.log(timbre);
*/
alarma.setMovimiento(true);
alarma.setPuerta_Ventana(true);
alarma.setRompioVidrio(true);

alarma.comprobar();
alarmaLuz.setMovimiento(true);
alarmaLuz.setRompioVidrio(true);
alarmaLuz.setPuerta_Ventana(true);
alarmaLuz.comprobar();





