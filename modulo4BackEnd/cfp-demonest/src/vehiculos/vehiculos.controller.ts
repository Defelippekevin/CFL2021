import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Vehiculos from './Vehiculos';
import { VehiculosService } from './vehiculos.service';

@Controller('vehiculos')
export class VehiculosController {
    public constructor(private vehiculosServices:VehiculosService){}

    @Get()
    public getVehiculos():any{
        return this.vehiculosServices.getVehiculos();
    }

    @Get(':patente')
    public getProducto(@Param('patente') patente): Vehiculos {
        return this.vehiculosServices.getVehiculo(patente);
    }


    @Post()
    create(@Body() vehiculo:any):string{
        if(vehiculo.tipo == "auto"){
            return this.vehiculosServices.crearAuto(vehiculo);
        } else if(vehiculo.tipo == "camioneta"){
            return this.vehiculosServices.crearCamioneta(vehiculo);
        }
    }
}
