import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
    public  getClientes(): any {
        let clientes=[
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
}
