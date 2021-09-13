import { Controller, Get, Param } from '@nestjs/common';
import { CalcularService } from './calcular.service';

@Controller('calcular')
export class CalcularController {
    constructor(private calcularService:CalcularService){}
        
    @Get(':oper/:ope1/:ope2')
    ejecutar(@Param('oper') oper, @Param('ope1') ope1, @Param('ope2') ope2) : string {
        let num1=parseInt(ope1);
        let num2=parseInt(ope2);
    return this.calcularService.getResultado(oper, num1, num2);
    }
}

