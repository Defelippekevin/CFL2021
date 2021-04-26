let readlineSync = require("readline-sync");

let altura= readlineSync.questionInt('ingrese su altura en centimetros : ');
console.log(altura);

let alturaMinima=130;

if(altura>=alturaMinima){
        console.log("disfrute la montaña rusa");
    }
    else{
        console.log("no puede ingresar a  la montaña rusa");

    }
