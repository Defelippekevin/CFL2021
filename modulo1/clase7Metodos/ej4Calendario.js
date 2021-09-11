let readlineSync = require('readline-sync');

let dia = readlineSync.questionInt(" ingrese un dia entre 1 y 31 ");

while(dia<1 || dia>31){
    dia= readlineSync.questionInt(" ingreso  un dia invalido, por favor ingrese un dia entre 1 y 31 ");    
}

let mes = readlineSync.questionInt(" ingrese un mes entre 1 y 12 ");

while(mes>12 || mes<1){
    mes= readlineSync.questionInt(" ingreso  un mes invalido, por favor ingrese un mes entre 1 y 12 ");  
}

let anio= readlineSync.question("ingrese un anio ");

let diasPorMes = new Array (31,28,31,30,31,30,31,31,30,31,30,31);



function contarDiasFindeMes(dia,mes){ // hago el calculo de cuantos dias falta para que termine el mes con los datos pasados por parametro
    let contarDiasRestantes=0;

    if ((mes==1) || (mes==3) || (mes==5) || (mes==7) || (mes==8) || (mes==10) || (mes==12)){
        contarDiasRestantes= (31-dia);

    }else if ((mes==4) || (mes==6) || (mes==9) || (mes==11)){
        contarDiasRestantes= (30-dia);

    }else{
        contarDiasRestantes=(28-dia);
    }
    return contarDiasRestantes;

 
}

let diasRestantesFinMes = contarDiasFindeMes(dia,mes);
console.log("total de dias para que termien el mes "+diasRestantesFinMes);

function contarDiasDelAño(dia,mes,anio,diasPorMes){
    let dias=0;

    for(let i=diasPorMes.length-1;i>=mes;i--){
        dias= dias+diasPorMes[i];
    }
    if(((anio%4)==0) && ((anio%100)!=0) && (mes<=2) && (dia<=28)){
        dias++;

    }

    return dias;
}

let totalDiasAnual= contarDiasDelAño(dia,mes,anio,diasPorMes);
console.log("total de dias "+totalDiasAnual);

let diasqFaltan= totalDiasAnual + diasRestantesFinMes;

console.log("los dias que faltan para que el año termine a partir de su fecha ingresada son "+diasqFaltan);

