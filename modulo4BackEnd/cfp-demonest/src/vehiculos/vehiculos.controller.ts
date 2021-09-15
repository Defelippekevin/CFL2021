import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';

@Controller('vehiculos')
export class VehiculosController {
    public constructor(private vehiculosServices:VehiculosService){}

    @Get()
    public getVehiculos():any{
        return this.vehiculosServices.getVehiculos();
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
