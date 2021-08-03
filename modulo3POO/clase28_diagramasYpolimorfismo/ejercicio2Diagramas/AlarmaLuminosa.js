"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Luz_1 = require("./Luz");
var Alarma_1 = require("./Alarma");
var AlarmaLuminosa = /** @class */ (function (_super) {
    __extends(AlarmaLuminosa, _super);
    function AlarmaLuminosa() {
        var _this = _super.call(this) || this;
        _this.luminosa = new Luz_1["default"];
        return _this;
    }
    AlarmaLuminosa.prototype.comprobar = function () {
        if ((!this.rompioVidrio) && (!this.puerta_ventana) && (!this.movimiento)) {
            return false;
        }
        else {
            this.timbre.hacerSonar();
            this.luminosa.encender();
            console.log("te estan robando ");
            return true;
        }
    };
    return AlarmaLuminosa;
}(Alarma_1["default"]));
exports["default"] = AlarmaLuminosa;
