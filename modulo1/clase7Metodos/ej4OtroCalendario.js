let readlineSync= require("readline-sync");
let dia = readlineSync.questionInt(" ingrese un dia entre 1 y 31 ");

while(dia<1 || dia>31){
    dia= readlineSync.questionInt(" ingreso  un dia invalido, por favor ingrese un dia entre 1 y 31 ");    
}

let mes = readlineSync.questionInt(" ingrese un mes entre 1 y 12 ");

while(mes>12 || mes<1){
    mes= readlineSync.questionInt(" ingreso  un mes invalido, por favor ingrese un mes entre 1 y 12 ");  
}

let anio= readlineSync.question("ingrese un anio ");


function calcularDiasRestantesMes(dia){
    return diasRestantesDelMes= 31 - dia;
}
let diasRestantesMes= calcularDiasRestantesMes(dia);

function calcularMesesRestantesAnio(mes){
    return mesesRestantesFinAnio= 12 - mes;
}
let mesesRestantesAnio= calcularMesesRestantesAnio(mes);



diasRestantesDelAño=diasRestantesMes+ (mesesRestantesAnio*31);

console.log("los dias que restantes para llegar al final del mes : " +diasRestantesMes);
console.log("los meses restantes para llegar a final de año son  : " +mesesRestantesAnio);
console.log("los dias totales que estan faltando para llegar al final del anio "+anio+" son " +diasRestantesDelAño);
