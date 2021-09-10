"use strict";
exports.__esModule = true;
var Televisor_1 = require("./Televisor");
var SmarTV_1 = require("./SmarTV");
var RLS = require("readline-sync");
try {
    var opcion = RLS.questionInt(" inserte 1 para crear un televisor viejo, inserte 2 para crear un smarTV o ingrese 3 si desea salir ");
    if (opcion != 1 && opcion != 2 && opcion != 3) {
        throw new Error('la opcion que ingreso no corresponde a un tv en este local');
    }
    if (opcion == 1) {
        var tvSmart = new SmarTV_1["default"]();
        var comandosSmart = RLS.questionInt(" inserte 1 si desea prender el tele, 2 si desea cambiar el canal, 3 si desea cambiar el volumen, 4 si desea mirar netflix, 5 si desea subir volumen, 6 si desea bajar volumen, otro valor si desea salir ");
        while (comandosSmart > 0 && comandosSmart <= 6) {
            switch (comandosSmart) {
                case 1:
                    tvSmart.prenderApagar();
                    break;
                case 2:
                    var canalNuevo = RLS.questionInt("ingrese el canal al que desea ir ");
                    tvSmart.cambiarCanal(canalNuevo);
                    break;
                case 3:
                    var volumenNuevo = RLS.questionInt("ingrese el volumen al que desea ir ");
                    tvSmart.cambiarCanal(volumenNuevo);
                    break;
                case 4:
                    tvSmart.mirarNetflix();
                    break;
                case 5:
                    tvSmart.subirVolumen();
                    break;
                case 6: tvSmart.bajarVolumen();
            }
            comandosSmart = RLS.questionInt(" inserte 1 si desea prender el tele, 2 si desea cambiar el canal, 3 si desea cambiar el volumen, 4 si desea mirar netflix, 5 si desea subir volumen, 6 si desea bajar volumen, otro valor si desea salir ");
        }
    }
    else if (opcion == 2) {
        var tvViejo = new Televisor_1["default"]();
        var comandosTvViejo = RLS.questionInt(" inserte 1 si desea prender el tele, 2 si desea cambiar el canal, 3 si desea cambiar el volumen,otro valor si desea salir ");
        while (comandosTvViejo > 0 && comandosTvViejo <= 6) {
            switch (comandosTvViejo) {
                case 1:
                    tvViejo.prenderApagar();
                    break;
                case 2:
                    var canalNuevo = RLS.questionInt("ingrese el canal al que desea ir ");
                    tvViejo.cambiarCanal(canalNuevo);
                    break;
                case 3:
                    var volumenNuevo = RLS.questionInt("ingrese el volumen al que desea ir ");
                    tvViejo.cambiarCanal(volumenNuevo);
            }
            comandosTvViejo = RLS.questionInt(" inserte 1 si desea prender el tele, 2 si desea cambiar el canal, 3 si desea cambiar el volumen, 4 si desea mirar netflix, 5 si desea subir volumen, 6 si desea bajar volumen, otro valor si desea salir ");
        }
    }
    else if (opcion == 3) {
        console.log("usted salio ");
    }
}
catch (error) {
    console.log(error.message);
}
