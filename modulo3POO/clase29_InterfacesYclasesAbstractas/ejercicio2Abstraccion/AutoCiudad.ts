import { Vehiculo } from "./Vehiculo";

export class AutoCiudad extends Vehiculo{

    constructor(marca:string,patente:string,anio:number){
        super(marca,anio,patente);
    }

    public acelerar():void{
        this.velocidad+=20;
    }

}