"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
let ClienteService = class ClienteService {
    getClientes() {
        let clientes = [
            {
                "razonSocial": "asociacion Civil la tribu",
                "domicilio": "roca 1545",
                "saldo": 30000
            },
            {
                "razonSocial": "asociacion Civil la casita de la union",
                "domicilio": "belgrano 555",
                "saldo": 42000
            },
            {
                "razonSocial": "asociacion Civil luz y fuerza",
                "domicilio": " alberdi 250",
                "saldo": 25000
            },
            {
                "razonSocial": "asociacion Civil santamarina",
                "domicilio": "avellaneda 300",
                "saldo": 4000
            },
            {
                "razonSocial": "asociacion Civil nose",
                "domicilio": "calle falsa 123",
                "saldo": 5000
            },
            {
                "razonSocial": "asociacion Civil la tribu",
                "domicilio": "roca 1545",
                "saldo": 30000
            }
        ];
        return clientes;
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)()
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map