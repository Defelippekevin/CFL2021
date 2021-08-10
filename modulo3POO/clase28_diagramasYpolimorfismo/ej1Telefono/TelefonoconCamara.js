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
var Camara_1 = require("./Camara");
var Telefono_1 = require("./Telefono");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.camara = new Camara_1["default"]();
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        this.camara.sacarFoto();
    };
    TelefonoConCamara.prototype.encenderLinterna = function () {
        this.linternaPrendida = true;
    };
    return TelefonoConCamara;
}(Telefono_1["default"]));
exports["default"] = TelefonoConCamara;
var telCamara = new TelefonoConCamara();
telCamara.sacarFoto();
console.log(telCamara);
telCamara.encenderLinterna();
console.log(telCamara);
