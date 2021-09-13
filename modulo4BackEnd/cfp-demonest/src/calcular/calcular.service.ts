import { Injectable } from '@nestjs/common';

@Injectable()
export class CalcularService {
    public getResultado(ope:string, op1:number,op2:number):any{
        let resultado = null
        switch(ope){
            case 'sumar':
                resultado = { "resultado" : `${op1+op2}` };
            break;
            case 'restar':
                resultado = { "resultado" : `${op1-op2}` };
            break;
            case 'multiplicar':
                resultado = { "resultado" : `${op1*op2}` };
            break;
            case 'dividir':
                resultado = { "resultado" : `${op1/op2}` };
            break;
           }
            return resultado;
        }
 }

    

