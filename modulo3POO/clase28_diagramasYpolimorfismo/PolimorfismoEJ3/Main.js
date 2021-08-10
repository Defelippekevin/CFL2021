"use strict";
exports.__esModule = true;
var Motor_1 = require("./Motor");
var Colectivo_1 = require("./Colectivo");
var RLS = require("readline-sync");
function createMotor() {
    var nroSerie = RLS.questionInt("Ingrese nro de serie del motor ");
    var combustibleMotor = RLS.question("Ingrese que  tipo de combustible usa el  motor ");
    var motor = new Motor_1["default"](combustibleMotor, nroSerie);
    return motor;
}
var motor = createMotor();
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
var c1 = new Colectivo_1["default"]("el rapido", "largo", 30, motor);
console.log(c1);
console.log(c1.getMarca());
console.log(c1.getModelo());
c1.acelerar();
console.log(c1.getAceleracion());
c1.desacelerar();
console.log(c1.getAceleracion());
