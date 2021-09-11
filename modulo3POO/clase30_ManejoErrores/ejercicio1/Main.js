"use strict";
exports.__esModule = true;
var Telefono_1 = require("./Telefono");
var RLS = require("readline-sync");
var telViejo = new Telefono_1["default"]();
function comandosAelegir(opcion) {
    switch (opcion) {
        case 1: {
            telViejo.hacerLlamada();
            break;
        }
        case 2: {
            var num = RLS.questionInt('ingrese el numero al que quiere mandar el msj ');
            var msj = RLS.question("ingrese el mensaje que desea enviar: ");
            telViejo.mandarMensaje(num, msj);
            break;
        }
        case 3: {
            telViejo.prenderApagar();
            break;
        }
        case 4: {
            telViejo.verBateriaActual();
            break;
        }
    }
}
try {
    var opcion = RLS.questionInt('Ingrese 1 si quiere llamar, 2 si quiere mandar un msj, 3 si quiere prender o apagar el celular o 4 si quiere ver la bateria acutal ');
    if (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4) {
        throw new Error("ninguna opcion pertenece al comando");
    }
    comandosAelegir(opcion);
}
catch (error) {
    console.log(error.message);
    var opcion = RLS.question('Ingrese 1 si quiere llamar, 2 si quiere mandar un msj, 3 si quiere prender o apagar el celular o 4 si quiere ver la bateria acutal ');
}
