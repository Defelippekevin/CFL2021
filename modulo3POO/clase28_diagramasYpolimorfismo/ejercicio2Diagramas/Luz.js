"use strict";
exports.__esModule = true;
var Luz = /** @class */ (function () {
    function Luz() {
        this.luz = false;
    }
    Luz.prototype.encender = function () {
        if (this.luz = false) {
            this.luz = true;
            console.log("haciendo luces");
            return true;
        }
        else {
            return false;
        }
    };
    return Luz;
}());
exports["default"] = Luz;
