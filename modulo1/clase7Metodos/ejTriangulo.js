

let readlineSync = require('readline-sync');

let base= readlineSync.questionInt('ingrese la base ');
let altura= readlineSync.questionInt('ingrese la altura ');


let resultado= calcularAreaTriangulo(base,altura);



function calcularAreaTriangulo(num1,num2){
    let resultado= (num1*num2)/2;
    return resultado;
}

console.log("el resultado de hacer base "+base+" x "+altura+" es "+resultado);