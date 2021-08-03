"use strict";
exports.__esModule = true;
var Timbre = /** @class */ (function () {
    function Timbre() {
        this.timbre = false;
    }
    Timbre.prototype.isTimbre = function () {
        return this.timbre;
    };
    Timbre.prototype.setTimbre = function (timbre) {
        this.timbre = timbre;
    };
    Timbre.prototype.hacerSonar = function () {
        if (this.timbre = false) {
            this.timbre = true;
            console.log("sonando alarma");
            return true;
        }
        else {
            return false;
        }
    };
    return Timbre;
}());
exports["default"] = Timbre;
