import Motor from "./Motor";
import Vehiculo from "./Vehiculo";
import Auto from "./Auto";
import Colectivo from "./Colectivo";
 import * as RLS from 'readline-sync';


function createMotor():Motor{

    let nroSerie:number = RLS.questionInt("Ingrese nro de serie del motor ");
    let combustibleMotor:string=RLS.question("Ingrese que  tipo de combustible usa el  motor ");
    let motor:Motor = new Motor(combustibleMotor,nroSerie);
    return motor;
}
let motor:Motor= createMotor();

/*
let v1:Vehiculo = new Vehiculo("ford","fiesta",50,motor);
console.log(v1);
console.log(v1.getMarca());
console.log(v1.getModelo());
v1.acelerar();
console.log(v1.getAceleracion());


let a1:Auto = new Auto("ferrari","fiesta",100,motor);
console.log(a1);
console.log(a1.getMarca());
console.log(a1.getModelo());
a1.acelerar();
console.log(a1.getAceleracion());
a1.desacelerar();
console.log(a1.getAceleracion());
*/

let c1:Colectivo= new Colectivo("el rapido","largo",30,motor);
console.log(c1);
console.log(c1.getMarca());
console.log(c1.getModelo());
c1.acelerar();
console.log(c1.getAceleracion());
c1.desacelerar();
console.log(c1.getAceleracion());






