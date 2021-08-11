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
var Televisor_1 = require("./Televisor");
var SmartTV = /** @class */ (function (_super) {
    __extends(SmartTV, _super);
    function SmartTV() {
        var _this = _super.call(this) || this;
        _this.canalActual = 1;
        return _this;
    }
    SmartTV.prototype.mirarNetflix = function () {
        console.log('Mirando Netflix...');
    };
    SmartTV.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    SmartTV.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    return SmartTV;
}(Televisor_1["default"]));
exports["default"] = SmartTV;
