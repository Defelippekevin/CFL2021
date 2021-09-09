"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
let ProductoService = class ProductoService {
    getProductos() {
        let arrayCompras = [
            {
                "producto": "Pera",
                "precio": 50,
                "descripcion": "muy rica pera"
            },
            {
                "producto": "mandarina",
                "precio": 70,
                "descripcion": "medias agrias"
            },
            {
                "producto": "naranja",
                "precio": 60,
                "descripcion": "bien jugosas"
            },
            {
                "producto": "bananas",
                "precio": 40,
                "descripcion": "riquisimas"
            },
            {
                "producto": "kiwi",
                "precio": 80,
                "descripcion": "ideal para una ensalada de fruta"
            },
            {
                "producto": "sandia",
                "precio": 190,
                "descripcion": "re contra dulces0"
            }
        ];
        return arrayCompras;
    }
};
ProductoService = __decorate([
    (0, common_1.Injectable)()
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map